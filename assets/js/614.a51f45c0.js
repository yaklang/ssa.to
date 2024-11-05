exports.id = 614;
exports.ids = [169,376,603,614,628,756];
exports.modules = {

/***/ 33169:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  getIconClasses: () => (/* binding */ getIconClasses)
});

// EXTERNAL MODULE: ./node_modules/monaco-editor/esm/vs/base/common/network.js
var network = __webpack_require__(13072);
// EXTERNAL MODULE: ./node_modules/monaco-editor/esm/vs/base/common/resources.js
var resources = __webpack_require__(22467);
// EXTERNAL MODULE: ./node_modules/monaco-editor/esm/vs/base/common/uri.js
var uri = __webpack_require__(37264);
// EXTERNAL MODULE: ./node_modules/monaco-editor/esm/vs/editor/common/languages/modesRegistry.js
var modesRegistry = __webpack_require__(54957);
;// ./node_modules/monaco-editor/esm/vs/platform/files/common/files.js
//#endregion
//#region Utilities
var FileKind;
(function (FileKind) {
    FileKind[FileKind["FILE"] = 0] = "FILE";
    FileKind[FileKind["FOLDER"] = 1] = "FOLDER";
    FileKind[FileKind["ROOT_FOLDER"] = 2] = "ROOT_FOLDER";
})(FileKind || (FileKind = {}));
//#endregion

// EXTERNAL MODULE: ./node_modules/monaco-editor/esm/vs/base/common/themables.js
var themables = __webpack_require__(58881);
;// ./node_modules/monaco-editor/esm/vs/editor/common/services/getIconClasses.js
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/






const fileIconDirectoryRegex = /(?:\/|^)(?:([^\/]+)\/)?([^\/]+)$/;
function getIconClasses(modelService, languageService, resource, fileKind, icon) {
    if (themables/* ThemeIcon */.L.isThemeIcon(icon)) {
        return [`codicon-${icon.id}`, 'predefined-file-icon'];
    }
    if (uri/* URI */.r.isUri(icon)) {
        return [];
    }
    // we always set these base classes even if we do not have a path
    const classes = fileKind === FileKind.ROOT_FOLDER ? ['rootfolder-icon'] : fileKind === FileKind.FOLDER ? ['folder-icon'] : ['file-icon'];
    if (resource) {
        // Get the path and name of the resource. For data-URIs, we need to parse specially
        let name;
        if (resource.scheme === network/* Schemas */.ny.data) {
            const metadata = resources/* DataUri */.B6.parseMetaData(resource);
            name = metadata.get(resources/* DataUri */.B6.META_DATA_LABEL);
        }
        else {
            const match = resource.path.match(fileIconDirectoryRegex);
            if (match) {
                name = cssEscape(match[2].toLowerCase());
                if (match[1]) {
                    classes.push(`${cssEscape(match[1].toLowerCase())}-name-dir-icon`); // parent directory
                }
            }
            else {
                name = cssEscape(resource.authority.toLowerCase());
            }
        }
        // Root Folders
        if (fileKind === FileKind.ROOT_FOLDER) {
            classes.push(`${name}-root-name-folder-icon`);
        }
        // Folders
        else if (fileKind === FileKind.FOLDER) {
            classes.push(`${name}-name-folder-icon`);
        }
        // Files
        else {
            // Name & Extension(s)
            if (name) {
                classes.push(`${name}-name-file-icon`);
                classes.push(`name-file-icon`); // extra segment to increase file-name score
                // Avoid doing an explosive combination of extensions for very long filenames
                // (most file systems do not allow files > 255 length) with lots of `.` characters
                // https://github.com/microsoft/vscode/issues/116199
                if (name.length <= 255) {
                    const dotSegments = name.split('.');
                    for (let i = 1; i < dotSegments.length; i++) {
                        classes.push(`${dotSegments.slice(i).join('.')}-ext-file-icon`); // add each combination of all found extensions if more than one
                    }
                }
                classes.push(`ext-file-icon`); // extra segment to increase file-ext score
            }
            // Detected Mode
            const detectedLanguageId = detectLanguageId(modelService, languageService, resource);
            if (detectedLanguageId) {
                classes.push(`${cssEscape(detectedLanguageId)}-lang-file-icon`);
            }
        }
    }
    return classes;
}
function detectLanguageId(modelService, languageService, resource) {
    if (!resource) {
        return null; // we need a resource at least
    }
    let languageId = null;
    // Data URI: check for encoded metadata
    if (resource.scheme === network/* Schemas */.ny.data) {
        const metadata = resources/* DataUri */.B6.parseMetaData(resource);
        const mime = metadata.get(resources/* DataUri */.B6.META_DATA_MIME);
        if (mime) {
            languageId = languageService.getLanguageIdByMimeType(mime);
        }
    }
    // Any other URI: check for model if existing
    else {
        const model = modelService.getModel(resource);
        if (model) {
            languageId = model.getLanguageId();
        }
    }
    // only take if the language id is specific (aka no just plain text)
    if (languageId && languageId !== modesRegistry/* PLAINTEXT_LANGUAGE_ID */.vH) {
        return languageId;
    }
    // otherwise fallback to path based detection
    return languageService.guessLanguageIdByFilepathOrFirstLine(resource);
}
function cssEscape(str) {
    return str.replace(/[\s]/g, '/'); // HTML class names can not contain certain whitespace characters (https://dom.spec.whatwg.org/#interface-domtokenlist), use / instead, which doesn't exist in file names.
}


/***/ }),

/***/ 19376:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   encodeSemanticTokensDto: () => (/* binding */ encodeSemanticTokensDto)
/* harmony export */ });
/* harmony import */ var _base_common_buffer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42802);
/* harmony import */ var _base_common_platform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63339);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/


function reverseEndianness(arr) {
    for (let i = 0, len = arr.length; i < len; i += 4) {
        // flip bytes 0<->3 and 1<->2
        const b0 = arr[i + 0];
        const b1 = arr[i + 1];
        const b2 = arr[i + 2];
        const b3 = arr[i + 3];
        arr[i + 0] = b3;
        arr[i + 1] = b2;
        arr[i + 2] = b1;
        arr[i + 3] = b0;
    }
}
function toLittleEndianBuffer(arr) {
    const uint8Arr = new Uint8Array(arr.buffer, arr.byteOffset, arr.length * 4);
    if (!_base_common_platform_js__WEBPACK_IMPORTED_MODULE_1__/* .isLittleEndian */ .cm()) {
        // the byte order must be changed
        reverseEndianness(uint8Arr);
    }
    return _base_common_buffer_js__WEBPACK_IMPORTED_MODULE_0__/* .VSBuffer */ .MB.wrap(uint8Arr);
}
function encodeSemanticTokensDto(semanticTokens) {
    const dest = new Uint32Array(encodeSemanticTokensDtoSize(semanticTokens));
    let offset = 0;
    dest[offset++] = semanticTokens.id;
    if (semanticTokens.type === 'full') {
        dest[offset++] = 1 /* EncodedSemanticTokensType.Full */;
        dest[offset++] = semanticTokens.data.length;
        dest.set(semanticTokens.data, offset);
        offset += semanticTokens.data.length;
    }
    else {
        dest[offset++] = 2 /* EncodedSemanticTokensType.Delta */;
        dest[offset++] = semanticTokens.deltas.length;
        for (const delta of semanticTokens.deltas) {
            dest[offset++] = delta.start;
            dest[offset++] = delta.deleteCount;
            if (delta.data) {
                dest[offset++] = delta.data.length;
                dest.set(delta.data, offset);
                offset += delta.data.length;
            }
            else {
                dest[offset++] = 0;
            }
        }
    }
    return toLittleEndianBuffer(dest);
}
function encodeSemanticTokensDtoSize(semanticTokens) {
    let result = 0;
    result += (+1 // id
        + 1 // type
    );
    if (semanticTokens.type === 'full') {
        result += (+1 // data length
            + semanticTokens.data.length);
    }
    else {
        result += (+1 // delta count
        );
        result += (+1 // start
            + 1 // deleteCount
            + 1 // data length
        ) * semanticTokens.deltas.length;
        for (const delta of semanticTokens.deltas) {
            if (delta.data) {
                result += delta.data.length;
            }
        }
    }
    return result;
}


/***/ }),

/***/ 45628:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/



/***/ }),

/***/ 2603:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DraggedTreeItemsIdentifier: () => (/* binding */ DraggedTreeItemsIdentifier),
/* harmony export */   TreeViewsDnDService: () => (/* binding */ TreeViewsDnDService)
/* harmony export */ });
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
class TreeViewsDnDService {
    constructor() {
        this._dragOperations = new Map();
    }
    removeDragOperationTransfer(uuid) {
        if ((uuid && this._dragOperations.has(uuid))) {
            const operation = this._dragOperations.get(uuid);
            this._dragOperations.delete(uuid);
            return operation;
        }
        return undefined;
    }
}
class DraggedTreeItemsIdentifier {
    constructor(identifier) {
        this.identifier = identifier;
    }
}


/***/ }),

/***/ 26756:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ITreeViewsDnDService: () => (/* binding */ ITreeViewsDnDService)
/* harmony export */ });
/* harmony import */ var _platform_instantiation_common_extensions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(66726);
/* harmony import */ var _platform_instantiation_common_instantiation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82399);
/* harmony import */ var _treeViewsDnd_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2603);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/



const ITreeViewsDnDService = (0,_platform_instantiation_common_instantiation_js__WEBPACK_IMPORTED_MODULE_0__/* .createDecorator */ .u1)('treeViewsDndService');
(0,_platform_instantiation_common_extensions_js__WEBPACK_IMPORTED_MODULE_1__/* .registerSingleton */ .v)(ITreeViewsDnDService, _treeViewsDnd_js__WEBPACK_IMPORTED_MODULE_2__.TreeViewsDnDService, 1 /* InstantiationType.Delayed */);


/***/ }),

/***/ 47614:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./editorBaseApi": 93059,
	"./editorBaseApi.js": 93059,
	"./editorSimpleWorker": 14003,
	"./editorSimpleWorker.js": 14003,
	"./editorWorker": 90304,
	"./editorWorker.js": 90304,
	"./editorWorkerHost": 96358,
	"./editorWorkerHost.js": 96358,
	"./findSectionHeaders": 99307,
	"./findSectionHeaders.js": 99307,
	"./getIconClasses": 33169,
	"./getIconClasses.js": 33169,
	"./languageFeatureDebounce": 12060,
	"./languageFeatureDebounce.js": 12060,
	"./languageFeatures": 52230,
	"./languageFeatures.js": 52230,
	"./languageFeaturesService": 23704,
	"./languageFeaturesService.js": 23704,
	"./languageService": 83930,
	"./languageService.js": 83930,
	"./languagesAssociations": 55996,
	"./languagesAssociations.js": 55996,
	"./languagesRegistry": 66995,
	"./languagesRegistry.js": 66995,
	"./markerDecorations": 80886,
	"./markerDecorations.js": 80886,
	"./markerDecorationsService": 90011,
	"./markerDecorationsService.js": 90011,
	"./model": 64830,
	"./model.js": 64830,
	"./modelService": 40931,
	"./modelService.js": 40931,
	"./resolverService": 37042,
	"./resolverService.js": 37042,
	"./semanticTokensDto": 19376,
	"./semanticTokensDto.js": 19376,
	"./semanticTokensProviderStyling": 27642,
	"./semanticTokensProviderStyling.js": 27642,
	"./semanticTokensStyling": 82891,
	"./semanticTokensStyling.js": 82891,
	"./semanticTokensStylingService": 38148,
	"./semanticTokensStylingService.js": 38148,
	"./textModelSync/textModelSync.impl": 81171,
	"./textModelSync/textModelSync.impl.js": 81171,
	"./textModelSync/textModelSync.protocol": 45628,
	"./textModelSync/textModelSync.protocol.js": 45628,
	"./textResourceConfiguration": 41504,
	"./textResourceConfiguration.js": 41504,
	"./treeSitterParserService": 35320,
	"./treeSitterParserService.js": 35320,
	"./treeViewsDnd": 2603,
	"./treeViewsDnd.js": 2603,
	"./treeViewsDndService": 26756,
	"./treeViewsDndService.js": 26756,
	"./unicodeTextModelHighlighter": 49887,
	"./unicodeTextModelHighlighter.js": 49887,
	"monaco-editor/esm/vs/editor/common/services/editorBaseApi": 93059,
	"monaco-editor/esm/vs/editor/common/services/editorBaseApi.js": 93059,
	"monaco-editor/esm/vs/editor/common/services/editorSimpleWorker": 14003,
	"monaco-editor/esm/vs/editor/common/services/editorSimpleWorker.js": 14003,
	"monaco-editor/esm/vs/editor/common/services/editorWorker": 90304,
	"monaco-editor/esm/vs/editor/common/services/editorWorker.js": 90304,
	"monaco-editor/esm/vs/editor/common/services/editorWorkerHost": 96358,
	"monaco-editor/esm/vs/editor/common/services/editorWorkerHost.js": 96358,
	"monaco-editor/esm/vs/editor/common/services/findSectionHeaders": 99307,
	"monaco-editor/esm/vs/editor/common/services/findSectionHeaders.js": 99307,
	"monaco-editor/esm/vs/editor/common/services/getIconClasses": 33169,
	"monaco-editor/esm/vs/editor/common/services/getIconClasses.js": 33169,
	"monaco-editor/esm/vs/editor/common/services/languageFeatureDebounce": 12060,
	"monaco-editor/esm/vs/editor/common/services/languageFeatureDebounce.js": 12060,
	"monaco-editor/esm/vs/editor/common/services/languageFeatures": 52230,
	"monaco-editor/esm/vs/editor/common/services/languageFeatures.js": 52230,
	"monaco-editor/esm/vs/editor/common/services/languageFeaturesService": 23704,
	"monaco-editor/esm/vs/editor/common/services/languageFeaturesService.js": 23704,
	"monaco-editor/esm/vs/editor/common/services/languageService": 83930,
	"monaco-editor/esm/vs/editor/common/services/languageService.js": 83930,
	"monaco-editor/esm/vs/editor/common/services/languagesAssociations": 55996,
	"monaco-editor/esm/vs/editor/common/services/languagesAssociations.js": 55996,
	"monaco-editor/esm/vs/editor/common/services/languagesRegistry": 66995,
	"monaco-editor/esm/vs/editor/common/services/languagesRegistry.js": 66995,
	"monaco-editor/esm/vs/editor/common/services/markerDecorations": 80886,
	"monaco-editor/esm/vs/editor/common/services/markerDecorations.js": 80886,
	"monaco-editor/esm/vs/editor/common/services/markerDecorationsService": 90011,
	"monaco-editor/esm/vs/editor/common/services/markerDecorationsService.js": 90011,
	"monaco-editor/esm/vs/editor/common/services/model": 64830,
	"monaco-editor/esm/vs/editor/common/services/model.js": 64830,
	"monaco-editor/esm/vs/editor/common/services/modelService": 40931,
	"monaco-editor/esm/vs/editor/common/services/modelService.js": 40931,
	"monaco-editor/esm/vs/editor/common/services/resolverService": 37042,
	"monaco-editor/esm/vs/editor/common/services/resolverService.js": 37042,
	"monaco-editor/esm/vs/editor/common/services/semanticTokensDto": 19376,
	"monaco-editor/esm/vs/editor/common/services/semanticTokensDto.js": 19376,
	"monaco-editor/esm/vs/editor/common/services/semanticTokensProviderStyling": 27642,
	"monaco-editor/esm/vs/editor/common/services/semanticTokensProviderStyling.js": 27642,
	"monaco-editor/esm/vs/editor/common/services/semanticTokensStyling": 82891,
	"monaco-editor/esm/vs/editor/common/services/semanticTokensStyling.js": 82891,
	"monaco-editor/esm/vs/editor/common/services/semanticTokensStylingService": 38148,
	"monaco-editor/esm/vs/editor/common/services/semanticTokensStylingService.js": 38148,
	"monaco-editor/esm/vs/editor/common/services/textModelSync/textModelSync.impl": 81171,
	"monaco-editor/esm/vs/editor/common/services/textModelSync/textModelSync.impl.js": 81171,
	"monaco-editor/esm/vs/editor/common/services/textModelSync/textModelSync.protocol": 45628,
	"monaco-editor/esm/vs/editor/common/services/textModelSync/textModelSync.protocol.js": 45628,
	"monaco-editor/esm/vs/editor/common/services/textResourceConfiguration": 41504,
	"monaco-editor/esm/vs/editor/common/services/textResourceConfiguration.js": 41504,
	"monaco-editor/esm/vs/editor/common/services/treeSitterParserService": 35320,
	"monaco-editor/esm/vs/editor/common/services/treeSitterParserService.js": 35320,
	"monaco-editor/esm/vs/editor/common/services/treeViewsDnd": 2603,
	"monaco-editor/esm/vs/editor/common/services/treeViewsDnd.js": 2603,
	"monaco-editor/esm/vs/editor/common/services/treeViewsDndService": 26756,
	"monaco-editor/esm/vs/editor/common/services/treeViewsDndService.js": 26756,
	"monaco-editor/esm/vs/editor/common/services/unicodeTextModelHighlighter": 49887,
	"monaco-editor/esm/vs/editor/common/services/unicodeTextModelHighlighter.js": 49887
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 47614;

/***/ })

};
;
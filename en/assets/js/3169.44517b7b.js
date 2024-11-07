"use strict";
exports.id = 3169;
exports.ids = [3169];
exports.modules = {

/***/ 33169:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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


/***/ })

};
;
"use strict";
exports.id = 6756;
exports.ids = [2603,6756];
exports.modules = {

/***/ 2603:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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


/***/ })

};
;
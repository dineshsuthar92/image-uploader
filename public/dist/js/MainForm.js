"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["MainForm"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/MainForm.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/MainForm.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_UploadFileService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/UploadFileService */ "./resources/js/services/UploadFileService.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "MainForm",
  data: function data() {
    return {
      title: "",
      description: "",
      selectedFiles: undefined,
      progressInfos: [],
      message: "",
      fileInfos: [],
      form_id: ""
    };
  },
  mounted: function mounted() {// UploadService.getFiles().then((response) => {
    //     this.fileInfos = response.data;
    // });
  },
  methods: {
    selectFile: function selectFile() {
      this.progressInfos = [];
      this.selectedFiles = event.target.files;
    },
    uploadFiles: function uploadFiles() {
      var _this = this;

      // first save title and Image
      window.axios.post("/api/save-form-details", {
        title: this.title,
        description: this.description
      }, {}).then(function (response) {
        _this.form_id = response.data.data.form_id; // then upload the images with form_id

        _this.message = "";

        for (var i = 0; i < _this.selectedFiles.length; i++) {
          _this.upload(i, _this.selectedFiles[i]);
        }
      })["catch"](function (error) {
        console.log('error');
      });
    },
    upload: function upload(idx, file) {
      var _this2 = this;

      this.progressInfos[idx] = {
        percentage: 0,
        fileName: file.name
      };
      _services_UploadFileService__WEBPACK_IMPORTED_MODULE_0__["default"].upload(file, this.form_id, function (event) {
        _this2.progressInfos[idx].percentage = Math.round(100 * event.loaded / event.total);
      }).then(function (response) {
        var prevMessage = _this2.message ? _this2.message + "\n" : "";
        _this2.message = prevMessage + response.data.message; // return UploadService.getFiles();

        return true;
      }).then(function (files) {
        _this2.fileInfos = files.data;
      })["catch"](function () {
        _this2.progressInfos[idx].percentage = 0;
        _this2.message = "Could not upload the file:" + file.name;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/MainForm.vue?vue&type=template&id=59d07df0&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/MainForm.vue?vue&type=template&id=59d07df0&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "container-fluid"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": "title"
    }
  }, [_vm._v("Title")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.title,
      expression: "title"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      id: "title",
      placeholder: "Enter Title"
    },
    domProps: {
      value: _vm.title
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.title = $event.target.value;
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": "description"
    }
  }, [_vm._v("Description")]), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.description,
      expression: "description"
    }],
    staticClass: "form-control",
    attrs: {
      name: "description",
      id: "description",
      cols: "30",
      rows: "10"
    },
    domProps: {
      value: _vm.description
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.description = $event.target.value;
      }
    }
  })]), _vm._v(" "), _c("div", [_vm.progressInfos ? _c("div", _vm._l(_vm.progressInfos, function (progressInfo, index) {
    return _c("div", {
      key: index,
      staticClass: "mb-2"
    }, [_c("span", [_vm._v(_vm._s(progressInfo.fileName))]), _vm._v(" "), _c("div", {
      staticClass: "progress"
    }, [_c("div", {
      staticClass: "progress-bar progress-bar-info",
      style: {
        width: progressInfo.percentage + "%"
      },
      attrs: {
        role: "progressbar",
        "aria-valuenow": progressInfo.percentage,
        "aria-valuemin": "0",
        "aria-valuemax": "100"
      }
    }, [_vm._v("\n                        " + _vm._s(progressInfo.percentage) + "%\n                    ")])])]);
  }), 0) : _vm._e(), _vm._v(" "), _c("label", {
    staticClass: "btn btn-default"
  }, [_c("input", {
    attrs: {
      type: "file",
      accept: "image/*",
      multiple: ""
    },
    on: {
      change: _vm.selectFile
    }
  })]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-success",
    attrs: {
      disabled: !_vm.selectedFiles
    },
    on: {
      click: _vm.uploadFiles
    }
  }, [_vm._v("\n            Upload\n        ")]), _vm._v(" "), _vm.message ? _c("div", {
    staticClass: "alert alert-light",
    attrs: {
      role: "alert"
    }
  }, [_c("ul", _vm._l(_vm.message.split("\n"), function (ms, i) {
    return _c("li", {
      key: i
    }, [_vm._v("\n                    " + _vm._s(ms) + "\n                ")]);
  }), 0)]) : _vm._e()])]);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/services/UploadFileService.js":
/*!****************************************************!*\
  !*** ./resources/js/services/UploadFileService.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _http_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http-common */ "./resources/js/services/http-common.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }



var UploadFilesService = /*#__PURE__*/function () {
  function UploadFilesService() {
    _classCallCheck(this, UploadFilesService);
  }

  _createClass(UploadFilesService, [{
    key: "upload",
    value: function upload(file, form_id, onUploadProgress) {
      var formData = new FormData();
      formData.append("file", file);
      formData.append("form_id", form_id);
      return _http_common__WEBPACK_IMPORTED_MODULE_0__["default"].post("/api/save-images", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        },
        onUploadProgress: onUploadProgress
      });
    }
  }, {
    key: "getFiles",
    value: function getFiles() {
      return _http_common__WEBPACK_IMPORTED_MODULE_0__["default"].get("/files");
    }
  }]);

  return UploadFilesService;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new UploadFilesService());

/***/ }),

/***/ "./resources/js/services/http-common.js":
/*!**********************************************!*\
  !*** ./resources/js/services/http-common.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (axios__WEBPACK_IMPORTED_MODULE_0___default().create({
  baseURL: "http://127.0.0.1:8000",
  headers: {
    "Content-type": "application/json"
  }
}));

/***/ }),

/***/ "./resources/js/components/MainForm.vue":
/*!**********************************************!*\
  !*** ./resources/js/components/MainForm.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MainForm_vue_vue_type_template_id_59d07df0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MainForm.vue?vue&type=template&id=59d07df0&scoped=true& */ "./resources/js/components/MainForm.vue?vue&type=template&id=59d07df0&scoped=true&");
/* harmony import */ var _MainForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MainForm.vue?vue&type=script&lang=js& */ "./resources/js/components/MainForm.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MainForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MainForm_vue_vue_type_template_id_59d07df0_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _MainForm_vue_vue_type_template_id_59d07df0_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "59d07df0",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/MainForm.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/MainForm.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/components/MainForm.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MainForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MainForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/MainForm.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MainForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/MainForm.vue?vue&type=template&id=59d07df0&scoped=true&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/MainForm.vue?vue&type=template&id=59d07df0&scoped=true& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MainForm_vue_vue_type_template_id_59d07df0_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MainForm_vue_vue_type_template_id_59d07df0_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MainForm_vue_vue_type_template_id_59d07df0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MainForm.vue?vue&type=template&id=59d07df0&scoped=true& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/MainForm.vue?vue&type=template&id=59d07df0&scoped=true&");


/***/ })

}]);
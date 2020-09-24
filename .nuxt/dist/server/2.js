exports.ids = [2];
exports.modules = {

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return getArticles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return getYourFeedArticles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return addFavorite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return deleteFavorite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return addFollow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return deleteFollow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return createArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return deleteArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return getArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return updateArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return getComments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addComment; });
/* harmony import */ var _plugins_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
 // 获取公共的文章列表

const getArticles = params => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'GET',
    url: '/api/articles',
    params
  });
}; // 获取用户关注的文章列表

const getYourFeedArticles = params => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'GET',
    url: '/api/articles/feed',
    params
  });
}; // 添加点赞

const addFavorite = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'POST',
    url: `/api/articles/${slug}/favorite`
  });
}; // 取消点赞

const deleteFavorite = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'DELETE',
    url: `/api/articles/${slug}/favorite`
  });
}; // 添加关注

const addFollow = username => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'POST',
    url: `/api/profiles/${username}/follow`
  });
}; // 取消关注

const deleteFollow = username => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'DELETE',
    url: `/api/profiles/${username}/follow`
  });
}; // 发表文章

const createArticle = data => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'POST',
    url: '/api/articles',
    data
  });
}; // 删除文章

const deleteArticle = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'DELETE',
    url: `/api/articles/${slug}`
  });
}; // 获取文章详情

const getArticle = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'GET',
    url: `/api/articles/${slug}`
  });
}; // 更新文章详情

const updateArticle = (slug, data) => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'PUT',
    url: `/api/articles/${slug}`,
    data
  });
}; // 获取文章评论

const getComments = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'GET',
    url: `/api/articles/${slug}/comments`
  });
}; // 评论文章

const addComment = (slug, body) => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'POST',
    url: `/api/articles/${slug}/comments`,
    data: {
      body
    }
  });
};

/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/editor/index.vue?vue&type=template&id=252bf34d&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"editor-page"},[_vm._ssrNode("<div class=\"container page\" data-v-252bf34d><div class=\"row\" data-v-252bf34d><div class=\"col-md-10 offset-md-1 col-xs-12\" data-v-252bf34d>"+((_vm.errors)?("<ul class=\"error-messages\" data-v-252bf34d>"+(_vm._ssrList((_vm.errors),function(value,field){return ("<div class=\"ng-scope\" data-v-252bf34d>"+(_vm._ssrList((value),function(error){return ("<li class=\"ng-binding ng-scope\" data-v-252bf34d>"+_vm._ssrEscape("\n              "+_vm._s(field)+" "+_vm._s(error)+"\n            ")+"</li>")}))+"</div>")}))+"</ul>"):"<!---->")+" <form data-v-252bf34d><fieldset data-v-252bf34d><fieldset class=\"form-group\" data-v-252bf34d><input type=\"text\" placeholder=\"Article Title\" required=\"required\""+(_vm._ssrAttr("value",(_vm.article.title)))+" class=\"form-control form-control-lg\" data-v-252bf34d></fieldset> <fieldset class=\"form-group\" data-v-252bf34d><input type=\"text\" placeholder=\"What's this article about?\" required=\"required\""+(_vm._ssrAttr("value",(_vm.article.description)))+" class=\"form-control\" data-v-252bf34d></fieldset> <fieldset class=\"form-group\" data-v-252bf34d><textarea rows=\"8\" placeholder=\"Write your article (in markdown)\" required=\"required\" class=\"form-control\" data-v-252bf34d>"+_vm._ssrEscape(_vm._s(_vm.article.body))+"</textarea></fieldset> <fieldset class=\"form-group\" data-v-252bf34d><input type=\"text\" placeholder=\"Enter tags\""+(_vm._ssrAttr("value",(_vm.tagstr)))+" class=\"form-control\" data-v-252bf34d> <div class=\"tag-list\" data-v-252bf34d>"+(_vm._ssrList((_vm.article.tagList),function(tag,index){return ("<span class=\"tag-default tag-pill\" data-v-252bf34d><i class=\"ion-close-round\" data-v-252bf34d></i>"+_vm._ssrEscape("\n                  "+_vm._s(tag)+"\n                ")+"</span>")}))+"</div></fieldset> <button type=\"button\" class=\"btn btn-lg pull-xs-right btn-primary\" data-v-252bf34d>\n              Publish Article\n            </button></fieldset></form></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/editor/index.vue?vue&type=template&id=252bf34d&scoped=true&

// EXTERNAL MODULE: ./api/article.js
var article = __webpack_require__(27);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/editor/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var editorvue_type_script_lang_js_ = ({
  name: 'EditorIndex',
  middleware: 'authenticated',

  data() {
    return {
      tagstr: '',
      errors: null,
      article: {
        title: '',
        description: '',
        body: '',
        tagList: []
      }
    };
  },

  async mounted() {
    const slug = this.$route.params.slug;

    if (slug) {
      this.slug = slug;
      const {
        data
      } = await Object(article["h" /* getArticle */])(slug);
      this.article = data.article;
    }
  },

  methods: {
    enterTag() {
      this.article.tagList.push(this.tagstr);
      this.tagstr = '';
    },

    removeTag(index) {
      this.article.tagList.splice(index, 1);
    },

    async submitArticle() {
      try {
        if (this.slug) {
          const {
            data
          } = await Object(article["l" /* updateArticle */])(this.slug, {
            article: this.article
          });
          this.$router.push(`/article/${data.article.slug}`);
        } else {
          const {
            data
          } = await Object(article["d" /* createArticle */])({
            article: this.article
          });
          this.$router.push(`/article/${data.article.slug}`);
        }
      } catch (e) {
        this.errors = e.response.data.errors;
      }
    }

  }
});
// CONCATENATED MODULE: ./pages/editor/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_editorvue_type_script_lang_js_ = (editorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/editor/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_editorvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "252bf34d",
  "64209847"
  
)

/* harmony default export */ var editor = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=2.js.map
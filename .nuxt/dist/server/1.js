exports.ids = [1];
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

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/index.vue?vue&type=template&id=22c8efef&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"article-page"},[_vm._ssrNode("<div class=\"banner\">","</div>",[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<h1>"+_vm._ssrEscape(_vm._s(_vm.article.title))+"</h1> "),_c('ArticleMeta',{attrs:{"article":_vm.article}})],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"container page\">","</div>",[_vm._ssrNode("<div class=\"row article-content\"><div class=\"col-md-12\">"+(_vm._s(_vm.article.body))+"</div> <ul class=\"tag-list\">"+(_vm._ssrList((_vm.article.tagList),function(tag){return ("<li class=\"tag-default tag-pill tag-outline\">"+_vm._ssrEscape("\n          "+_vm._s(tag)+"\n        ")+"</li>")}))+"</ul></div> <hr> "),_vm._ssrNode("<div class=\"article-actions\">","</div>",[_c('ArticleMeta',{attrs:{"article":_vm.article}})],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-xs-12 col-md-8 offset-md-2\">","</div>",[(_vm.user)?_c('ArticleComment',{attrs:{"article":_vm.article}}):_c('ArticleUnlogin')],1)])],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/article/index.vue?vue&type=template&id=22c8efef&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(7);

// EXTERNAL MODULE: external "markdown-it"
var external_markdown_it_ = __webpack_require__(26);
var external_markdown_it_default = /*#__PURE__*/__webpack_require__.n(external_markdown_it_);

// EXTERNAL MODULE: ./api/article.js
var api_article = __webpack_require__(27);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/components/article-meta.vue?vue&type=template&id=1ae63100&
var article_metavue_type_template_id_1ae63100_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"article-meta"},[_c('nuxt-link',{attrs:{"to":{
      name: 'profile',
      params: {
        username: _vm.article.author.username,
      },
    }}},[_c('img',{attrs:{"src":_vm.article.author.image}})]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"info\">","</div>",[_c('nuxt-link',{staticClass:"author",attrs:{"to":{
        name: 'profile',
        params: {
          username: _vm.article.author.username,
        },
      }}},[_vm._v(_vm._s(_vm.article.author.username))]),_vm._ssrNode(" <span class=\"date\">"+_vm._ssrEscape(_vm._s(_vm._f("date")(_vm.article.createdAt,"MMM DD, YYYY")))+"</span>")],2),_vm._ssrNode(" "),(!_vm.isAuthor)?_vm._ssrNode("<span>","</span>",[_vm._ssrNode("<button"+(_vm._ssrClass("btn btn-sm btn-outline-secondary",{ active: _vm.article.author.following }))+"><i class=\"ion-plus-round\"></i>"+_vm._ssrEscape("\n        Follow "+_vm._s(_vm.article.author.username)+"\n    ")+"</button>\n     \n    <button"+(_vm._ssrAttr("disabled",_vm.article.favoriteDisabled))+(_vm._ssrClass("btn btn-sm btn-outline-primary",{ active: _vm.article.favorited }))+"><i class=\"ion-heart\"></i>\n        Favorite Post\n      <span class=\"counter\">"+_vm._ssrEscape("("+_vm._s(_vm.article.favoritesCount)+")")+"</span></button>")],2):_vm._ssrNode("<span>","</span>",[_c('nuxt-link',{staticClass:"btn btn-outline-secondary btn-sm",attrs:{"to":{
        name: 'editor',
        params: {
          slug: _vm.article.slug,
        },
      }}},[_c('i',{staticClass:"ion-edit"}),_vm._v(" Edit Article\n    ")]),_vm._ssrNode(" <button"+(_vm._ssrClass("btn btn-outline-danger btn-sm",{ disabled: _vm.article.isDeleting }))+"><i class=\"ion-trash-a\"></i> Delete Article\n    </button>")],2)],2)}
var article_metavue_type_template_id_1ae63100_staticRenderFns = []


// CONCATENATED MODULE: ./pages/article/components/article-meta.vue?vue&type=template&id=1ae63100&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/components/article-meta.vue?vue&type=script&lang=js&
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
//
//


/* harmony default export */ var article_metavue_type_script_lang_js_ = ({
  name: "ArticleMeta",
  props: {
    article: {
      type: Object,
      required: true
    }
  },

  mounted() {
    this.article.favoriteDisabled = false;
    this.article.followDisabled = false;
  },

  computed: { ...Object(external_vuex_["mapState"])(["user"]),

    isAuthor() {
      return this.article.author.username === this.user.username;
    }

  },
  methods: {
    async handleDelete(article) {
      this.article.isDeleting = true;
      await Object(api_article["e" /* deleteArticle */])(article.slug);
      this.article.isDeleting = false;
      this.$router.push('/');
    },

    async onFavorite(article) {
      if (!this.user) return this.$router.push('/login');
      article.favoriteDisabled = true; // 禁用点击

      if (article.favorited) {
        // 取消点赞
        await Object(api_article["f" /* deleteFavorite */])(article.slug);
        article.favorited = false;
        article.favoritesCount -= 1;
      } else {
        // 添加点赞
        await Object(api_article["b" /* addFavorite */])(article.slug);
        article.favorited = true;
        article.favoritesCount += 1;
      }

      article.favoriteDisabled = false; // 允许点击
    },

    async onFollow(author) {
      if (!this.user) return this.$router.push('/login');
      author.followDisabled = true; // 禁用点击

      if (author.following) {
        // 取消点赞
        await Object(api_article["g" /* deleteFollow */])(author.username);
        author.following = false;
      } else {
        // 添加点赞
        await Object(api_article["c" /* addFollow */])(author.username);
        author.following = true;
      }

      author.followDisabled = false; // 允许点击
    }

  }
});
// CONCATENATED MODULE: ./pages/article/components/article-meta.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_article_metavue_type_script_lang_js_ = (article_metavue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/article/components/article-meta.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_article_metavue_type_script_lang_js_,
  article_metavue_type_template_id_1ae63100_render,
  article_metavue_type_template_id_1ae63100_staticRenderFns,
  false,
  null,
  null,
  "3a17e3b0"
  
)

/* harmony default export */ var article_meta = (component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/components/article-comment.vue?vue&type=template&id=dcc1cbe4&
var article_commentvue_type_template_id_dcc1cbe4_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<form class=\"card comment-form\"><div class=\"card-block\"><textarea placeholder=\"Write a comment...\" rows=\"3\" class=\"form-control\">"+_vm._ssrEscape(_vm._s(_vm.body))+"</textarea></div> <div class=\"card-footer\"><img"+(_vm._ssrAttr("src",_vm.user.image))+" class=\"comment-author-img\"> <button class=\"btn btn-sm btn-primary\">\n        Post Comment\n      </button></div></form> "),_vm._l((_vm.comments),function(comment){return _vm._ssrNode("<div class=\"card\">","</div>",[_vm._ssrNode("<div class=\"card-block\"><p class=\"card-text\">"+_vm._ssrEscape(_vm._s(comment.body))+"</p></div> "),_vm._ssrNode("<div class=\"card-footer\">","</div>",[_c('nuxt-link',{staticClass:"comment-author",attrs:{"to":{
        name: 'profile',
        params: {
          username: comment.author.username
        }
      }}},[_c('img',{staticClass:"comment-author-img",attrs:{"src":comment.author.image}})]),_vm._ssrNode("\n       \n      "),_c('nuxt-link',{staticClass:"comment-author",attrs:{"to":{
        name: 'profile',
        params: {
          username: comment.author.username
        }
      }}},[_vm._v(_vm._s(comment.author.username))]),_vm._ssrNode(" <span class=\"date-posted\">"+_vm._ssrEscape(_vm._s(_vm._f("date")(comment.createdAt,'MMM DD, YYYY')))+"</span>")],2)],2)})],2)}
var article_commentvue_type_template_id_dcc1cbe4_staticRenderFns = []


// CONCATENATED MODULE: ./pages/article/components/article-comment.vue?vue&type=template&id=dcc1cbe4&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/components/article-comment.vue?vue&type=script&lang=js&
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


/* harmony default export */ var article_commentvue_type_script_lang_js_ = ({
  name: 'ArticleComment',
  props: {
    article: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      // 文章列表
      comments: [],
      body: ''
    };
  },

  async mounted() {
    // 不要求SEO，请求数据放到mounted里面，只走客户端渲染
    const {
      data
    } = await Object(api_article["j" /* getComments */])(this.article.slug);
    this.comments = data.comments;
  },

  computed: { ...Object(external_vuex_["mapState"])(['user'])
  },
  methods: {
    async submitComment() {
      const {
        data
      } = await Object(api_article["a" /* addComment */])(this.article.slug, this.body);
      this.comments.unshift(data.comment);
      this.body = '';
    }

  }
});
// CONCATENATED MODULE: ./pages/article/components/article-comment.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_article_commentvue_type_script_lang_js_ = (article_commentvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/article/components/article-comment.vue





/* normalize component */

var article_comment_component = Object(componentNormalizer["a" /* default */])(
  components_article_commentvue_type_script_lang_js_,
  article_commentvue_type_template_id_dcc1cbe4_render,
  article_commentvue_type_template_id_dcc1cbe4_staticRenderFns,
  false,
  null,
  null,
  "ad76ece8"
  
)

/* harmony default export */ var article_comment = (article_comment_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/components/article-unlogin.vue?vue&type=template&id=e6476a98&
var article_unloginvue_type_template_id_e6476a98_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"col-xs-12 col-md-8 offset-md-2\">","</div>",[_vm._ssrNode("<div show-authed=\"true\" style=\"display: none;\">","</div>",[_c('list-errors',{staticClass:"ng-isolate-scope",attrs:{"from":"$ctrl.commentForm.errors"}},[_c('ul',{staticClass:"error-messages ng-hide",attrs:{"ng-show":"$ctrl.errors"}})]),_vm._ssrNode(" <form ng-submit=\"$ctrl.addComment()\" class=\"card comment-form ng-pristine ng-valid\"><div class=\"card-block\"><textarea placeholder=\"Write a comment...\" rows=\"3\" ng-model=\"$ctrl.commentForm.body\" class=\"form-control ng-pristine ng-untouched ng-valid ng-empty\"></textarea></div> <div class=\"card-footer\"><img class=\"comment-author-img\"> <button type=\"submit\" class=\"btn btn-sm btn-primary\">\n            Post Comment\n          </button></div></form>")],2),_vm._ssrNode(" "),_vm._ssrNode("<p show-authed=\"false\" style=\"display: inherit;\">","</p>",[_c('nuxt-link',{attrs:{"to":"/login"}},[_vm._v("Sign in")]),_vm._ssrNode(" or\n      "),_c('nuxt-link',{attrs:{"to":"/register"}},[_vm._v("sign up")]),_vm._ssrNode(" to add comments\n      on this article.\n    ")],2)],2)])}
var article_unloginvue_type_template_id_e6476a98_staticRenderFns = []


// CONCATENATED MODULE: ./pages/article/components/article-unlogin.vue?vue&type=template&id=e6476a98&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/components/article-unlogin.vue?vue&type=script&lang=js&
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
/* harmony default export */ var article_unloginvue_type_script_lang_js_ = ({
  name: "ArticleUnlogin"
});
// CONCATENATED MODULE: ./pages/article/components/article-unlogin.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_article_unloginvue_type_script_lang_js_ = (article_unloginvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/article/components/article-unlogin.vue





/* normalize component */

var article_unlogin_component = Object(componentNormalizer["a" /* default */])(
  components_article_unloginvue_type_script_lang_js_,
  article_unloginvue_type_template_id_e6476a98_render,
  article_unloginvue_type_template_id_e6476a98_staticRenderFns,
  false,
  null,
  null,
  "6d0579c6"
  
)

/* harmony default export */ var article_unlogin = (article_unlogin_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/index.vue?vue&type=script&lang=js&
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






/* harmony default export */ var articlevue_type_script_lang_js_ = ({
  name: 'ArticleIndx',
  components: {
    ArticleMeta: article_meta,
    ArticleComment: article_comment,
    ArticleUnlogin: article_unlogin
  },

  async asyncData({
    params
  }) {
    const {
      data
    } = await Object(api_article["h" /* getArticle */])(params.slug);
    const {
      article
    } = data;
    const md = new external_markdown_it_default.a();
    article.body = md.render(article.body);
    return {
      article: article
    };
  },

  head() {
    return {
      title: `${this.article.title} - RealWorld`,
      meta: [{
        hid: 'description',
        name: 'description',
        content: this.article.description
      }]
    };
  },

  computed: { ...Object(external_vuex_["mapState"])(['user'])
  }
});
// CONCATENATED MODULE: ./pages/article/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_articlevue_type_script_lang_js_ = (articlevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/article/index.vue





/* normalize component */

var article_component = Object(componentNormalizer["a" /* default */])(
  pages_articlevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "a97c8a10"
  
)

/* harmony default export */ var pages_article = __webpack_exports__["default"] = (article_component.exports);

/***/ })

};;
//# sourceMappingURL=1.js.map
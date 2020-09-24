exports.ids = [6];
exports.modules = {

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return updateUser; });
/* harmony import */ var _plugins_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
 // 用户登录

const login = data => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'POST',
    url: '/api/users/login',
    data
  });
}; // 用户注册

const register = data => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'POST',
    url: '/api/users',
    data
  });
}; // 修改用户资料

const updateUser = data => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'PUT',
    url: '/api/user',
    data
  });
};

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/settings/index.vue?vue&type=template&id=23f5f477&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"settings-page"},[_vm._ssrNode("<div class=\"container page\" data-v-23f5f477><div class=\"row\" data-v-23f5f477><div class=\"col-md-6 offset-md-3 col-xs-12\" data-v-23f5f477><h1 class=\"text-xs-center\" data-v-23f5f477>Your Settings</h1> <ul class=\"error-messages\" data-v-23f5f477>"+(_vm._ssrList((_vm.errors),function(messages,field){return ((_vm._ssrList((messages),function(message,index){return ("<li data-v-23f5f477>"+_vm._ssrEscape("\n              "+_vm._s(field)+" "+_vm._s(messages)+"\n            ")+"</li>")})))}))+"</ul> <form data-v-23f5f477><fieldset data-v-23f5f477><fieldset class=\"form-group\" data-v-23f5f477><input type=\"url\" placeholder=\"URL of profile picture\" required=\"required\""+(_vm._ssrAttr("value",(_vm.user.image)))+" class=\"form-control\" data-v-23f5f477></fieldset> <fieldset class=\"form-group\" data-v-23f5f477><input type=\"text\" placeholder=\"Your Name\" required=\"required\""+(_vm._ssrAttr("value",(_vm.user.username)))+" class=\"form-control form-control-lg\" data-v-23f5f477></fieldset> <fieldset class=\"form-group\" data-v-23f5f477><textarea rows=\"8\" placeholder=\"Short bio about you\" required=\"required\" class=\"form-control form-control-lg\" data-v-23f5f477>"+_vm._ssrEscape(_vm._s(_vm.user.bio))+"</textarea></fieldset> <fieldset class=\"form-group\" data-v-23f5f477><input type=\"email\" placeholder=\"Email\" required=\"required\""+(_vm._ssrAttr("value",(_vm.user.email)))+" class=\"form-control form-control-lg\" data-v-23f5f477></fieldset> <fieldset class=\"form-group\" data-v-23f5f477><input type=\"password\" placeholder=\"Password\" required=\"required\""+(_vm._ssrAttr("value",(_vm.user.password)))+" class=\"form-control form-control-lg\" data-v-23f5f477></fieldset> <button class=\"btn btn-lg btn-primary pull-xs-right\" data-v-23f5f477>\n                Update Settings\n              </button></fieldset></form> <hr data-v-23f5f477> <button class=\"btn btn-outline-danger\" data-v-23f5f477>\n          Or click here to logout.\n        </button></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/settings/index.vue?vue&type=template&id=23f5f477&scoped=true&

// EXTERNAL MODULE: ./api/user.js
var user = __webpack_require__(28);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(7);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/settings/index.vue?vue&type=script&lang=js&
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
const Cookie =  false ? undefined : undefined;


/* harmony default export */ var settingsvue_type_script_lang_js_ = ({
  name: 'Settings',
  middleware: 'authenticated',

  data() {
    return {
      user: {
        bio: '',
        email: '',
        image: '',
        password: '',
        username: ''
      },
      errors: {} // 错误信息

    };
  },

  computed: { ...Object(external_vuex_["mapState"])({
      storeUser: 'user'
    })
  },

  mounted() {
    this.user.bio = this.storeUser.bio;
    this.user.email = this.storeUser.email;
    this.user.image = this.storeUser.image;
    this.user.password = this.storeUser.password;
    this.user.username = this.storeUser.username;
  },

  methods: {
    async handleSubmit() {
      try {
        const {
          data
        } = await Object(user["c" /* updateUser */])({
          user: this.user
        });
        console.log('data', data); // 更新用户的登录状态

        this.$store.commit('setUser', data.user); // 为了防止刷新页面数据丢失，数据需要持久化

        Cookie.set('user', data.user);
        this.$router.push(`/profile/${data.user.username}`);
      } catch (e) {
        this.errors = e.response.data.errors;
      }
    },

    logout() {
      // 删除用户的登录状态
      this.$store.commit('setUser', null); // 删除数据持久化

      Cookie.set('user', null);
      this.$router.push('/');
    }

  }
});
// CONCATENATED MODULE: ./pages/settings/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_settingsvue_type_script_lang_js_ = (settingsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/settings/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_settingsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "23f5f477",
  "5b87947d"
  
)

/* harmony default export */ var settings = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=6.js.map
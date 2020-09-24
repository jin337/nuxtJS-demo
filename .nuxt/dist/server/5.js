exports.ids = [5];
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

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/login/index.vue?vue&type=template&id=01a3346a&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"auth-page"},[_vm._ssrNode("<div class=\"container page\" data-v-01a3346a>","</div>",[_vm._ssrNode("<div class=\"row\" data-v-01a3346a>","</div>",[_vm._ssrNode("<div class=\"col-md-6 offset-md-3 col-xs-12\" data-v-01a3346a>","</div>",[_vm._ssrNode("<h1 class=\"text-xs-center\" data-v-01a3346a>"+_vm._ssrEscape(_vm._s(_vm.isLogin ? 'Sign in' : 'Sign up'))+"</h1> "),_vm._ssrNode("<p class=\"text-xs-center\" data-v-01a3346a>","</p>",[(!_vm.isLogin)?_c('nuxt-link',{attrs:{"to":"/login"}},[_vm._v("Have an account?")]):_c('nuxt-link',{attrs:{"to":"/register"}},[_vm._v("Need an account?")])],1),_vm._ssrNode(" <ul class=\"error-messages\" data-v-01a3346a>"+(_vm._ssrList((_vm.errors),function(messages,field){return ((_vm._ssrList((messages),function(message,index){return ("<li data-v-01a3346a>"+_vm._ssrEscape("\n              "+_vm._s(field)+" "+_vm._s(messages)+"\n            ")+"</li>")})))}))+"</ul> <form data-v-01a3346a>"+((!_vm.isLogin)?("<fieldset class=\"form-group\" data-v-01a3346a><input required=\"required\" type=\"text\" placeholder=\"Your Name\""+(_vm._ssrAttr("value",(_vm.user.username)))+" class=\"form-control form-control-lg\" data-v-01a3346a></fieldset>"):"<!---->")+" <fieldset class=\"form-group\" data-v-01a3346a><input required=\"required\" type=\"email\" placeholder=\"Email\""+(_vm._ssrAttr("value",(_vm.user.email)))+" class=\"form-control form-control-lg\" data-v-01a3346a></fieldset> <fieldset class=\"form-group\" data-v-01a3346a><input required=\"required\" type=\"password\" placeholder=\"Password\" minlength=\"8\""+(_vm._ssrAttr("value",(_vm.user.password)))+" class=\"form-control form-control-lg\" data-v-01a3346a></fieldset> <button class=\"btn btn-lg btn-primary pull-xs-right\" data-v-01a3346a>"+_vm._ssrEscape("\n            "+_vm._s(_vm.isLogin ? 'Sign in' : 'Sign up')+"\n          ")+"</button></form>")],2)])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/login/index.vue?vue&type=template&id=01a3346a&scoped=true&

// EXTERNAL MODULE: ./api/user.js
var user = __webpack_require__(28);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/login/index.vue?vue&type=script&lang=js&
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
// 仅在客户端加载js-cookie
const Cookie =  false ? undefined : undefined;

/* harmony default export */ var loginvue_type_script_lang_js_ = ({
  name: 'LoginPage',
  middleware: 'notAuthenticated',
  computed: {
    isLogin() {
      return this.$route.name === 'login';
    }

  },

  data() {
    return {
      user: {
        username: '',
        email: '',
        password: ''
      },
      errors: {} // 错误信息

    };
  },

  methods: {
    async onSubmit() {
      try {
        // 提交表单，请求登录
        const {
          data
        } = this.isLogin ? await Object(user["a" /* login */])({
          user: this.user
        }) : await Object(user["b" /* register */])({
          user: this.user
        });
        console.log('data', data); // 保存用户的登录状态

        this.$store.commit('setUser', data.user); // 为了防止刷新页面数据丢失，数据需要持久化

        Cookie.set('user', data.user); // 跳转到首页

        this.$router.push('/');
      } catch (err) {
        console.log('请求失败', err);
        console.dir(err);
        this.errors = err.response.data.errors;
      }
    }

  }
});
// CONCATENATED MODULE: ./pages/login/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_loginvue_type_script_lang_js_ = (loginvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/login/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_loginvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "01a3346a",
  "6c8816ab"
  
)

/* harmony default export */ var login = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=5.js.map
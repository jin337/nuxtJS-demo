import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _70c2097a = () => interopDefault(import('..\\pages\\layout' /* webpackChunkName: "" */))
const _d1b151a2 = () => interopDefault(import('..\\pages\\home' /* webpackChunkName: "" */))
const _4dfbd719 = () => interopDefault(import('..\\pages\\login' /* webpackChunkName: "" */))
const _d0ed754e = () => interopDefault(import('..\\pages\\profile' /* webpackChunkName: "" */))
const _2a41131a = () => interopDefault(import('..\\pages\\settings' /* webpackChunkName: "" */))
const _64f32fbd = () => interopDefault(import('..\\pages\\editor' /* webpackChunkName: "" */))
const _7e5388a6 = () => interopDefault(import('..\\pages\\article' /* webpackChunkName: "" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _70c2097a,
    children: [{
      path: "",
      component: _d1b151a2,
      name: "home"
    }, {
      path: "/login",
      component: _4dfbd719,
      name: "login"
    }, {
      path: "/register",
      component: _4dfbd719,
      name: "register"
    }, {
      path: "/profile/:username",
      component: _d0ed754e,
      name: "profile"
    }, {
      path: "/settings",
      component: _2a41131a,
      name: "settings"
    }, {
      path: "/editor/:slug?",
      component: _64f32fbd,
      name: "editor"
    }, {
      path: "/article/:slug",
      component: _7e5388a6,
      name: "article"
    }]
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}

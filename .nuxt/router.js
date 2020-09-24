import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _66b4aec8 = () => interopDefault(import('..\\pages\\layout' /* webpackChunkName: "" */))
const _af67525e = () => interopDefault(import('..\\pages\\home' /* webpackChunkName: "" */))
const _6176cbb7 = () => interopDefault(import('..\\pages\\login' /* webpackChunkName: "" */))
const _8fcceb12 = () => interopDefault(import('..\\pages\\profile' /* webpackChunkName: "" */))
const _475055d6 = () => interopDefault(import('..\\pages\\settings' /* webpackChunkName: "" */))
const _7e526242 = () => interopDefault(import('..\\pages\\editor' /* webpackChunkName: "" */))
const _c2386478 = () => interopDefault(import('..\\pages\\article' /* webpackChunkName: "" */))

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
    component: _66b4aec8,
    children: [{
      path: "",
      component: _af67525e,
      name: "home"
    }, {
      path: "/login",
      component: _6176cbb7,
      name: "login"
    }, {
      path: "/register",
      component: _6176cbb7,
      name: "register"
    }, {
      path: "/profile/:username",
      component: _8fcceb12,
      name: "profile"
    }, {
      path: "/settings",
      component: _475055d6,
      name: "settings"
    }, {
      path: "/editor/:slug?",
      component: _7e526242,
      name: "editor"
    }, {
      path: "/article/:slug",
      component: _c2386478,
      name: "article"
    }]
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}

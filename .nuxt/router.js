import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _6090a8f8 = () => interopDefault(import('../pages/layout' /* webpackChunkName: "" */))
const _af1883a6 = () => interopDefault(import('../pages/home' /* webpackChunkName: "" */))
const _663c4fdb = () => interopDefault(import('../pages/login' /* webpackChunkName: "" */))
const _bce2d4ca = () => interopDefault(import('../pages/profile' /* webpackChunkName: "" */))
const _21842e71 = () => interopDefault(import('../pages/settings' /* webpackChunkName: "" */))
const _54c1cf3b = () => interopDefault(import('../pages/editor' /* webpackChunkName: "" */))
const _ef4e4e30 = () => interopDefault(import('../pages/article' /* webpackChunkName: "" */))

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
    component: _6090a8f8,
    children: [{
      path: "",
      component: _af1883a6,
      name: "home"
    }, {
      path: "/login",
      component: _663c4fdb,
      name: "login"
    }, {
      path: "/register",
      component: _663c4fdb,
      name: "register"
    }, {
      path: "/profile/:username",
      component: _bce2d4ca,
      name: "profile"
    }, {
      path: "/settings",
      component: _21842e71,
      name: "settings"
    }, {
      path: "/editor/:slug?",
      component: _54c1cf3b,
      name: "editor"
    }, {
      path: "/article/:slug",
      component: _ef4e4e30,
      name: "article"
    }]
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}

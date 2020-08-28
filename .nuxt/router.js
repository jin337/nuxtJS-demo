import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _9a8f3794 = () => interopDefault(import('../pages/layout' /* webpackChunkName: "" */))
const _79a59e2a = () => interopDefault(import('../pages/home' /* webpackChunkName: "" */))
const _ba9d9646 = () => interopDefault(import('../pages/login' /* webpackChunkName: "" */))
const _d7437bc6 = () => interopDefault(import('../pages/profile' /* webpackChunkName: "" */))
const _eeabdba2 = () => interopDefault(import('../pages/settings' /* webpackChunkName: "" */))
const _b22ceb0e = () => interopDefault(import('../pages/editor' /* webpackChunkName: "" */))
const _7b28856a = () => interopDefault(import('../pages/article' /* webpackChunkName: "" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'hash',
  base: decodeURI('/'),
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _9a8f3794,
    children: [{
      path: "/",
      component: _79a59e2a,
      name: "home"
    }, {
      path: "/login",
      component: _ba9d9646,
      name: "login"
    }, {
      path: "/register",
      component: _ba9d9646,
      name: "register"
    }, {
      path: "/profile",
      component: _d7437bc6,
      name: "profile"
    }, {
      path: "/settings",
      component: _eeabdba2,
      name: "settings"
    }, {
      path: "/editor",
      component: _b22ceb0e,
      name: "editor"
    }, {
      path: "/article",
      component: _7b28856a,
      name: "article"
    }]
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}

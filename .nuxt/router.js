import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _3f0aaa80 = () => interopDefault(import('..\\pages\\CreatePost.vue' /* webpackChunkName: "pages/CreatePost" */))
const _7c707264 = () => interopDefault(import('..\\pages\\Post.vue' /* webpackChunkName: "pages/Post" */))
const _1e106915 = () => interopDefault(import('..\\pages\\Profile.vue' /* webpackChunkName: "pages/Profile" */))
const _1e5421fd = () => interopDefault(import('..\\pages\\Registration.vue' /* webpackChunkName: "pages/Registration" */))
const _12e9760e = () => interopDefault(import('..\\pages\\UserHome.vue' /* webpackChunkName: "pages/UserHome" */))
const _15711e44 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/CreatePost",
    component: _3f0aaa80,
    name: "CreatePost"
  }, {
    path: "/Post",
    component: _7c707264,
    name: "Post"
  }, {
    path: "/Profile",
    component: _1e106915,
    name: "Profile"
  }, {
    path: "/Registration",
    component: _1e5421fd,
    name: "Registration"
  }, {
    path: "/UserHome",
    component: _12e9760e,
    name: "UserHome"
  }, {
    path: "/",
    component: _15711e44,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}

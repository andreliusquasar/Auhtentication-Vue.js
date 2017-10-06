// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index.js'
import materialLite from '../node_modules/material-design-lite/material.min.css'
import mdl from '../node_modules/material-design-lite/material.min.js'
import VueResource from 'vue-resource'

// Authentication
import Auth from './package/auth/Auth'

Vue.config.productionTip = false
Vue.use(VueResource)
Vue.use(Auth)

// Navigation Guards with vue-router
router.beforeEach((to, from, next) => {
	 	if (to.matched.some(record => record.meta.requires)) {
	 		if (Vue.auth.isAuthenticated()) {
	 			next();
	 		}else next('/')
 	}else next()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})


// T:\CURSO SCHOOL OF NET\Vue Authentication Package\vue_auth
// https://kfhost.net/artigo/funcao-em-javascript-para-critografia-base64-encode
// 
// https://scotch.io/quick-tips/how-to-encode-and-decode-strings-with-base64-in-javascript
// 
// Usar vue-async-computed
// https://alligator.io/vuejs/async-computed-properties/
// https://github.com/foxbenjaminfox/vue-async-computed
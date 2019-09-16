import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'

// vue-course-15
Vue.use(VueResource)
Vue.http.options.root = 'https://vue-course-15.firebaseio.com'
Vue.http.interceptors.push((request, next) => {
    console.log(request)
    next((response => {
        console.log('this is the response', response)
    }))
})

new Vue({
  el: '#app',
  render: h => h(App)
})

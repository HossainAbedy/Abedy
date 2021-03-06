
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

//custom
import Gate from "./Gate";//Gate
Vue.prototype.$gate = new Gate(window.user);

window.Fire = new Vue(); //events

import swal from 'sweetalert2' //sweetalert
window.swal = swal;

const toast = swal.mixin({  //toaster
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
});  
window.toast = toast;//toaster

//sweetalert

import VueProgressBar from 'vue-progressbar' //progressbar
Vue.use(VueProgressBar, {
  color: 'rgb(143, 255, 199)',
  failedColor: 'red',
  height: '3px'
})

import moment from 'moment'; //for date style

import { Form, HasError, AlertError } from 'vform' //vform
window.Form=Form;
Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError) //vform

import VueRouter from 'vue-router' //vue-router
Vue.use(VueRouter)

let routes = [
    { path: '/dashboard', component: require('./components/Dashboard.vue').default},
    { path: '/developer', component: require('./components/Developer.vue').default},
    { path: '/profile', component: require('./components/Profile.vue').default},
    { path: '/users', component: require('./components/Users.vue').default}
  ]

const router = new VueRouter({
    mode: 'history',
    routes // short for `routes: routes`
}) //vue-router

Vue.filter('upText',function(text){       //global filter
  return text.charAt(0).toUpperCase()+ text.slice(1);
});

Vue.filter('myDate',function(created){
  return moment(created).format('MMMM Do YYYY, h:mm:ss a');
});  //global filter

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i);
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));

Vue.component('example-component', require('./components/ExampleComponent.vue').default);

//passport components
Vue.component('passport-clients', require('./components/passport/Clients.vue').default);

Vue.component('passport-authorized-clients', require('./components/passport/AuthorizedClients.vue').default);

Vue.component('passport-personal-access-tokens', require('./components/passport/PersonalAccessTokens.vue').default);
//passport components

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',router
});

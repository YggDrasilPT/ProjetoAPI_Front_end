import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'

import firebase from 'firebase';


Vue.config.productionTip = false


new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAX7SnpuNQD9metigumIdNbHRJDWQh06gs",
  authDomain: "api-das-fotos.firebaseapp.com",
  projectId: "api-das-fotos",
  storageBucket: "api-das-fotos.appspot.com",
  messagingSenderId: "354817191657",
  appId: "1:354817191657:web:719b9a045dff71184bca78",
  measurementId: "G-NMYJH76YHG"
  };

  firebase.initializeApp(firebaseConfig);
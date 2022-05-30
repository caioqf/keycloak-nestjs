import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import Keycloak from 'keycloak-js'

Vue.config.productionTip = false

let initConfig = {
  url: 'http://localhost:8080/auth',
  clientId: 'vue',
  realm: 'aronline',
  onLoad: 'login-required',
  checkLoginIframe: false
}

let keycloak = new Keycloak(initConfig);

keycloak.init({onLoad: initConfig.onLoad}).then(auth => {
  if (!auth){
    window.location.reload();
  } else {
    console.log(auth);
    new Vue({
      vuetify,
      render: h => h(App, {props: {keycloak: keycloak}}),
    }).$mount('#app')
  }
}).catch((e) => {
  alert(`Failure: ${e}`)
})

Vue.prototype.$keycloak = keycloak

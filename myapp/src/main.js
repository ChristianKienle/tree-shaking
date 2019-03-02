import Vue from 'vue'
import App from './App.vue'
import HelloWorld from 'mylib/src/components/HelloWorld.vue';
// import MyButton from 'mylib/src/components/MyButton.vue';
Vue.component("HelloWorld", HelloWorld);
// Vue.component("MyButton", MyButton);
// Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

import Vue from 'vue'
import HelloWorld from '@/components/HelloWorld.vue'
import MyButton from '@/components/MyButton.vue'

const install = (vue: Vue) => {
  Vue.component("FdHelloWorld", HelloWorld);
  Vue.component("FdMyButton", MyButton);
};

export default { install: install };

export { HelloWorld, MyButton };

<template>
  <div id="app">
    <HelloWorld msg="HelloWorld used in vue"/>
    <HelloWorld msg="HelloWorld used in vue"/>
  </div>
</template>

<script>
    // <HelloButton msg="HelloButton from app.vue" />
// import HelloButton from 'mylib/src/components/MyButton.vue';
// import HelloWorld from 'mylib/src/components/HelloWorld.vue';

export default {
  name: 'app',
  components: {
    // HelloWorld,
    // HelloButton
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <MyButton msg="my button"></MyButton>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import MyButton from '@/components/MyButton.vue';

export default Vue.extend({
  components: { MyButton },
  name: 'HelloWorld',
  props: {
    msg: String,
  },
});
</script>

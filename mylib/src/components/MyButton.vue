<template>
  <div class="hello">
    <h1>11111111{{ msg }}</h1>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'MyButton',
  props: {
    msg: String,
  },
});
</script>

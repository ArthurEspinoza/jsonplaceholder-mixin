<script>
import TestMixin from "jsonplaceholder-mixin";
export default{
  mixins: [TestMixin],
}
</script>

<template>
  <div>
    <p>{{ idUser }}</p>
    <p>{{ readUser }}</p>
    <button @click="getPosts">TEST Method</button>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>

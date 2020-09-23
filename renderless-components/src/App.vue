<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #333;
}
.marR10 {
  margin-right: 10px;
}
.marB20 {
  margin-bottom: 20px;
}
.box-card {
  display: inline-block;
  width: 240px;
  height: 240;
  margin-right: 10px;
  margin-bottom: 10px;
  border: 1px solid #eee;
  border-radius: 2px;
}
.image {
  width: 200px;
  height: 200px;
}
</style>

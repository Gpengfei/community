<template>
  <div id="app">
    <!--
    <img src="./assets/logo.png">
    <div>
      <p>
        If Element is successfully added to this project, you'll see an
        <code v-text="'<el-button>'"></code>
        below
      </p>
      <el-button>el-button</el-button>
    </div>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    -->
    <transition name="creditFile">
      <router-view />
    </transition>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: "app"
  // components: {
  //   HelloWorld
  // }
};
</script>

<style lang="scss" scoped>
.creditFile-enter {
  opacity: 0;
}
.creditFile-enter-active {
  transition: opacity 1s ease;
}
.creditFile-enter-to {
  opacity: 1;
  position: relative;
}
.creditFile-leave {
  opacity: 1;
}
.creditFile-leave-active {
  transition: opacity 1s ease;
}
.creditFile-leave-to {
  opacity: 0;
  position: absolute;
}
</style>

<template>
  <div class="body-bg min-h-screen pb-6 px-2 md:px-0" style="font-family:'Lato',sans-serif;">
    <header class="max-w-lg mx-auto">
        <a href="#">
            <h1 class="text-4xl font-bold text-white text-center">Top Swap</h1>
            <h1 class="text-2xl text-white text-center">Top Uniswap Pools based on ROI</h1>
        </a>
    </header>

    <main class="bg-white max-w-3xl mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl">
        <HelloWorld />
    </main>

  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.body-bg {
    background-color: #9921e8;
    background-image: linear-gradient(315deg, #9921e8 0%, #5f72be 74%);
}
</style>

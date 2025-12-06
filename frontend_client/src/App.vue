<template>
  <div id="app" class="app-root">
    <Navbar />
    <main class="main-content">
      <div class="content-wrapper">
        <router-view />
      </div>
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Cascadia+Code:wght@300;400;500&display=swap');

.app-root {
  min-height: 100vh;
  position: relative;
  font-family: 'Cascadia Code', monospace;
  /* REMOVE background: #000; */
  background: none;
  overflow-x: hidden;
}
</style>

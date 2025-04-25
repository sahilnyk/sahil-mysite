<template>
  <div id="app">
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
:root {
  --bg: #000000;
  --text: #f5f5f5;
  --nav-bg: #111111;
  --border-color: #333;
  --hover-color: lightgreen;
}

[data-theme='light'] {
  --bg: #ffffff;
  --text: #000000;
  --nav-bg: #eeeeee;
  --border-color: #ccc;
  --hover-color: navy;
}

html, body {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  background-color: var(--bg); /* full background black */
  color: var(--text);
  font-family: 'Source Code Pro', monospace;
  transition: background 0.3s ease, color 0.3s ease;
  background-color: #000 !important;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: var(--bg);
}

.main-content {
  flex: 1;
  width: 100%;
  background-color: var(--bg);
  display: flex;
  justify-content: center;
  padding: 20px 0;
}

.content-wrapper {
  width: 100%;
  max-width: 1200px;
  padding: 0 20px;
  box-sizing: border-box;
}

/* Make sure footer spans full width and matches bg */
footer {
  width: 100%;
  background-color: var(--bg);
  color: var(--text);
}
</style>

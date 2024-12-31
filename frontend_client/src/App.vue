<template>
  <div id="app">
    <Navbar />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';

export default {
  components: {
    Navbar,
    Footer
  }
};
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  margin-left: 10rem; /* Body margin added here */
  margin-right: 10rem; /* Body margin added here */
}

nav {
  text-align: center;
  padding: 1rem;
  color: white;
  font-family: 'M PLUS Code', sans-serif; /* Use custom font here */
  /* Ensure navbar is on top */
}

main {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
}

footer {
  text-align: center;
  padding: 1rem;
  color: white;
  margin-top: auto;
}

@media (max-width: 768px) {
  nav,
  footer {
    padding: 0.5rem;
  }
}

body {
  margin: 0;
  padding: 0;
  font-family: 'M PLUS Code', monospace; /* Ensure consistent font */
}

/* Light mode */
body.light-mode {
  --navbar-background: #f8f9fa;
  --link-color: #000000;
  --button-color: #000000;
  --button-hover-color: #f39c12;
  background-color: #f8f9fa;
  color: #000000;
}

/* Dark mode */
body.dark-mode {
  --link-color: white;
  --button-color: white;
  --button-hover-color: #f39c12;
  color: white;
}

a {
  color: var(--link-color);
}

.theme-toggle {
  color: var(--button-color);
}

.theme-toggle:hover {
  color: var(--button-hover-color);
}
</style>

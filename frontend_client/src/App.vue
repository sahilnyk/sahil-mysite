<template>
  <div id="app">
    <Navbar />
    <ConstructionBanner /> <!-- The banner is part of the layout and does not overlap -->
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import ConstructionBanner from './components/ConstructionBanner.vue';

export default {
  components: {
    Navbar,
    Footer,
    ConstructionBanner
  }
};
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

nav {
  text-align: center;
  padding: 1rem;
  color: white;
  /* z-index: 1000; */
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
  /* background-color: #333; */
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

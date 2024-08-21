<!-- <template>
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
</script> -->

<!-- <style scoped>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  text-align: center;
  justify-content: center;
  align-items: center;
}

router-view {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style> -->

<!-- <style scoped>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  /* justify-content: center; */
  align-items: center;
  text-align: center;
  margin: 0;
  padding: 0;
}
</style> -->

<!-- <style scoped>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  text-align: center;
  justify-items: center;
}

router-view {
  flex: 1;
}
</style> -->

<!-- <style>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

nav {
  text-align: center;
  padding: 1rem;
  /* background-color: #333; */
  color: white;
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
  /* background-color: #333; */
  color: white;
  margin-top: auto;
}

@media (max-width: 768px) {

  nav,
  footer {
    padding: 0.5rem;
  }
}

/* Light mode */
body.light-mode {
  --navbar-background: #f8f9fa;
  --link-color: #000000;
  --button-color: #000000;
  --button-hover-color: #f39c12;
  /* Orange color for hover */
  background-color: #f8f9fa;
  color: #000000;
}

/* Dark mode */
body.dark-mode {
  /* --navbar-background: #333; */
  --link-color: white;
  --button-color: white;
  --button-hover-color: #f39c12;
  /* Orange color for hover */
  background-color: #333;
  color: white;
}

/* Navbar styles */
nav {
  background-color: var(--navbar-background);
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
</style> -->


<!-- check -->

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

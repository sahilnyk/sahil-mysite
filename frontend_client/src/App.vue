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

<style>
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
</style>
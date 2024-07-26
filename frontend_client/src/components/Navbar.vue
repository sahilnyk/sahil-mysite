<template>
  <nav>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/about">About</router-link></li>
      <li><router-link to="/blogs">Blogs</router-link></li>
      <li><router-link to="/projects">Projects</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Navbar'
};
</script>


<!-- <style scoped>
nav {
  background-color: #333;
  padding: 1em;
  text-align: center;
  width: 100%;
}

ul {
  list-style-type: none;
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;
}

li {
  margin: 0 1em;
}

a {
  color: white;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}</style> -->


<style scoped>
nav {
  /* background-color: #333; */
  padding: 1em;
  text-align: center;
}

ul {
  list-style-type: none;
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;
}

li {
  margin: 0 1em;
}

a {
  color: white;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>
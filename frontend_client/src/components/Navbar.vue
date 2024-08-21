<!-- <template>
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
</style> -->

<template>
  <nav>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/about">About</router-link></li>
      <li><router-link to="/blogs">Blogs</router-link></li>
      <li><router-link to="/projects">Projects</router-link></li>
      <li class="theme-toggle-item">
        <button @click="toggleTheme" class="theme-toggle">
          <i :class="isDarkMode ? 'fas fa-sun' : 'fas fa-moon'"></i>
        </button>
      </li>
    </ul>
  </nav>
</template>


<script>
export default {
  name: 'Navbar',
  data() {
    return {
      isDarkMode: false
    };
  },
  computed: {
    themeIcon() {
      return this.isDarkMode ? 'fas fa-sun' : 'fas fa-moon';
    }
  },
  methods: {
    toggleTheme() {
      this.isDarkMode = !this.isDarkMode;
      document.body.classList.toggle('dark-mode', this.isDarkMode);
      document.body.classList.toggle('light-mode', !this.isDarkMode);
    }
  },
};
</script>

<style scoped>
nav {
  /* padding: 1em; */
  text-align: center;

  /* background-color: var(--navbar-background, #333); */
}

ul {
  list-style-type: none;
  display: flex;
  justify-content: center;
  /* Space between nav items and toggle button */
  align-items: center;
  /* Center items vertically */
  margin: 0;
  padding: 0;
  flex-wrap: wrap;
  /* Allow items to wrap if necessary */
}

li {
  margin: 0 1em;
}

a {
  color: var(--link-color, white);
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

.theme-toggle-item {
  margin-left: 2em;
  /* Add spacing to the left of the toggle button */
}

.theme-toggle {
  padding: 0.5em;
  background: transparent;
  /* Remove background color */
  border: none;
  /* Remove border */
  color: var(--button-color, white);
  cursor: pointer;
  font-size: 1.5em;
  border-radius: 50%;
  transition: color 0.3s, transform 0.3s;
  outline: none;
  /* Remove outline */
}

.theme-toggle:hover {
  color: var(--button-hover-color, #f39c12);
  /* Change icon color on hover */
  transform: scale(1.1);
  /* Slightly increase the size of the button on hover */
}

.theme-toggle i {
  margin: 0;
}

/* Light mode */
body.light-mode {
  --navbar-background: #f8f9fa;
  --link-color: #000000;
  --button-color: #000000;
  --button-hover-color: #f39c12;
  /* Orange color for hover */
}

/* Dark mode */
body.dark-mode {
  --navbar-background: #333;
  --link-color: white;
  --button-color: white;
  --button-hover-color: #f39c12;
  /* Orange color for hover */
}

/* Media Queries */

/* For tablets and smaller laptops */
@media (max-width: 1024px) {
  nav {
    padding: 0.5em;
    display: flex;
    justify-content: center;
  }

  ul {
    flex-direction: row;
    /* Ensure items are displayed horizontally */
    flex-wrap: nowrap;
    /* Prevent wrapping */
    overflow-x: auto;
    /* Allow horizontal scrolling if necessary */
  }

  li {
    margin: 0 0.5em;
    /* Adjust spacing for smaller screens */
  }

  .theme-toggle-item {
    margin-left: 1em;
    /* Adjust spacing for the toggle button */
  }
}

/* For phones */
@media (max-width: 768px) {
  nav {
    padding: 0.5em;
  }

  ul {
    flex-direction: row;
    /* Ensure items are displayed horizontally */
    flex-wrap: nowrap;
    /* Prevent wrapping */
    overflow-x: auto;
    /* Allow horizontal scrolling if necessary */
    justify-content: space-between;
    /* Space items across the bar */
  }

  li {
    margin: 0 0.5em;
    /* Adjust spacing for smaller screens */
  }

  .theme-toggle {
    font-size: 1.2em;
    padding: 0.4em;
  }

  .theme-toggle-item {
    margin-left: 1em;
    /* Adjust spacing for the toggle button */
  }
}
</style>

<template>
  <nav class="navbar">
    <div class="container">
      <!-- Logo Section with Search -->
      <div class="logo">
        <span class="brand-name">Sahilnyk</span>
      </div>

      <!-- Navbar Links -->
      <div class="links">
        <a href="#" class="link">Home</a>
        <a href="#blogs" class="link">Blogs</a>
        <a href="#projects" class="link">Projects</a>

        <!-- GitHub Link -->
        <a href="https://github.com/sahilnyk" target="_blank" class="link github-link">
          <div
            :class="{'github-icon-dark': isDarkMode, 'github-icon-light': !isDarkMode}"
          ></div>
        </a>

        <!-- Theme Toggle -->
        <div @click="toggleTheme" class="theme-switcher">
          <span v-if="isDarkMode">🌙</span>
          <span v-else>☀️</span>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isDarkMode: false,
      showSearchBar: false,
      searchQuery: "",
    };
  },
  methods: {
    toggleTheme() {
      this.isDarkMode = !this.isDarkMode;
      document.body.setAttribute("data-theme", this.isDarkMode ? "dark" : "light");
    },
    toggleSearchBar() {
      this.showSearchBar = !this.showSearchBar;
    },
  },
};
</script>

<style scoped>
/* Navbar styling */
.navbar {
  width: 100%;
  padding: 1rem 4rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--color-background);
  z-index: 1000;
}

/* Container for navbar alignment */
.container {
  width: 100%;
  max-width: 1000px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* Logo Section with Search */
.logo {
  display: flex;
  align-items: center;
}

.brand-name {
  font-family: 'M PLUS Code', monospace;
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-text);
  letter-spacing: 2px;
  margin-right: 1rem;
}

/* GitHub Icons */
.github-icon-light {
  width: 26px;
  height: 26px;
  background: url('https://cdn-icons-png.flaticon.com/512/25/25231.png') no-repeat center;
  background-size: contain;
}

.github-icon-dark {
  width: 26px;
  height: 26px;
  background: url('https://cdn-icons-png.flaticon.com/512/25/25231.png') no-repeat center;
  background-size: contain;
  filter: invert(1); /* White for dark mode */
}

.github-icon-light:hover,
.github-icon-dark:hover {
  opacity: 0.8;
}

/* Navbar Links */
.links {
  display: flex;
  align-items: center;
}

.link {
  margin: 0 1rem;
  color: var(--color-text);
  text-decoration: none;
  font-size: 1rem;
  transition: 0.3s ease;
  font-family: 'M PLUS Code', monospace;
}

.link:hover {
  text-decoration: underline;
  opacity: 0.8;
  color: aqua;
}

/* Theme Switcher */
.theme-switcher {
  cursor: pointer;
  margin-left: 1rem;
  font-size: 1.25rem;
  color: var(--color-text);
}

/* CSS Variables for Light and Dark Mode */
:root {
  --color-background: #ffffff;
  --color-text: #000000;
  --icon-color: invert(0); /* Black for light mode */
}

[data-theme="dark"] {
  --color-background: #121212;
  --color-text: #ffffff;
  --icon-color: invert(1); /* White for dark mode */
}

/* Animation */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive Design */
@media (max-width: 768px) {
  .navbar {
    padding: 0.5rem 2rem;
  }
  .brand-name {
    font-size: 1.2rem;
  }
  .search-icon,
  .github-icon-light,
  .github-icon-dark {
    width: 20px;
    height: 20px;
  }
  .link {
    font-size: 0.9rem;
    margin: 0 0.5rem;
  }
  .theme-switcher {
    font-size: 1rem;
  }

  /* Stack links vertically on mobile */
  .links {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>

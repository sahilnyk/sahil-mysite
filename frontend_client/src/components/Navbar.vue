<template>
  <nav class="navbar">
    <div class="navbar-inner">
      <div class="logo">
        <i class="fas fa-terminal"></i> Sahil Nayak
      </div>

      <button class="burger" @click="isOpen = !isOpen" aria-label="Toggle Menu">
        <i class="fas" :class="isOpen ? 'fa-times' : 'fa-bars'"></i>
      </button>

      <div class="nav-links" :class="{ open: isOpen }">
        <router-link to="/" class="nav-link">
          <i class="fas fa-user"></i> About
        </router-link>
        <router-link to="/projects" class="nav-link">
          <i class="fas fa-code"></i> Projects
        </router-link>
        <router-link to="/blogs" class="nav-link">
          <i class="fas fa-blog"></i> Blogs
        </router-link>
        <button class="theme-toggle" @click="toggleTheme" :title="theme === 'dark' ? 'Light mode' : 'Dark mode'">
          <i :class="theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon'"></i>
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const theme = ref('light')
const isOpen = ref(false)

onMounted(() => {
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme) theme.value = savedTheme
  document.documentElement.setAttribute('data-theme', theme.value)
})

function toggleTheme() {
  theme.value = theme.value === 'dark' ? 'light' : 'dark'
  document.documentElement.setAttribute('data-theme', theme.value)
  localStorage.setItem('theme', theme.value)
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=VT323&family=Source+Code+Pro:wght@400;500&display=swap');
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css');

.navbar {
  width: 100%;
  background-color: var(--nav-bg);
  border-bottom: 2px dashed var(--border-color);
  padding: 0.5rem 1rem;
  font-family: 'Source Code Pro', monospace;
}

.navbar-inner {
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10rem; /* Big gap between logo and nav */
}

.logo {
  font-size: 1.5rem;
  font-weight: 500;
  color: var(--text);
  display: flex;
  align-items: center;
  gap: 0.4rem;
  white-space: nowrap;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 1rem; /* Tighter gap for clean visuals */
  font-weight: 500;
}

.nav-links .nav-link {
  color: var(--text);
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.3rem;
  position: relative;
  transition: color 0.2s;
}

.nav-links .nav-link::after {
  content: "";
  position: absolute;
  width: 0%;
  height: 2px;
  bottom: -2px;
  left: 0;
  background-color: var(--hover-color);
  transition: width 0.3s;
}

.nav-links .nav-link:hover {
  color: var(--hover-color);
}

.nav-links .nav-link:hover::after {
  width: 100%;
}

.theme-toggle {
  background: none;
  border: none;
  color: var(--text);
  cursor: pointer;
  font-size: 1.5rem;
  padding: 0 0.3rem;
  transition: color 0.3s;
}

.theme-toggle:hover {
  color: var(--hover-color);
}

.burger {
  background: none;
  border: none;
  color: var(--text);
  font-size: 1.7rem;
  display: none;
  cursor: pointer;
}

/* Responsive Styles */
@media (max-width: 768px) {
  .burger {
    display: block;
  }

  .nav-links {
    position: absolute;
    top: 60px;
    right: 10px;
    background-color: var(--nav-bg);
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem 1.5rem;
    border: 1px dashed var(--border-color);
    gap: 1rem;
    display: none;
    z-index: 999;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    font-size: 1rem;
  }

  .nav-links.open {
    display: flex;
  }
}
</style>

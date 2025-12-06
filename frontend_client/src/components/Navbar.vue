<template>
  <nav class="navbar">
    <div class="navbar-content">
      <router-link to="/" class="navbar-logo">
        <i class="fas fa-terminal terminal-icon"></i>
        <span class="logo-text">sahilnayak</span><span class="logo-cursor">|</span>
      </router-link>
      <ul class="navbar-links">
        <li>
          <router-link to="/projects">
            <i class="fas fa-diagram-project nav-icon"></i>
            Projects
          </router-link>
        </li>
        <li>
          <router-link to="/blogs">
            <i class="fas fa-feather nav-icon"></i>
            Blogs
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
// No theme logic needed
</script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css');

.navbar {
  width: 100%;
  color: var(--text-color);
  font-family: 'Cascadia Code', monospace;
  position: sticky;
  top: 0;
  z-index: 10;
  background: none;
  border: none;
}

.navbar-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0.5rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.navbar-logo {
  font-size: 1.15rem;
  font-weight: 600;
  color: var(--text-color);
  text-decoration: none;
  letter-spacing: 0.04em;
  display: flex;
  align-items: center;
  gap: 0.14em;
  position: relative;
  cursor: pointer;
  user-select: none;
}

.terminal-icon {
  font-size: 1em;
  margin-right: 0.13em;
  color: var(--text-color);
  filter: drop-shadow(0 0 6px #fff8) drop-shadow(0 0 2px #fff4);
  transition: filter 0.4s cubic-bezier(.4,0,.2,1);
}

.navbar-logo:hover .terminal-icon {
  filter: drop-shadow(0 0 12px #fff) drop-shadow(0 0 4px #fff8);
}

.logo-text {
  font-family: inherit;
  font-weight: 600;
  letter-spacing: 0.04em;
}

.logo-cursor {
  display: inline-block;
  width: 1ch;
  color: var(--text-color);
  opacity: 1;
  animation: blink-cursor 1.1s steps(1) infinite;
  font-weight: 400;
  font-size: 1em;
  margin-left: 0.03em;
  position: relative;
  top: 1px;
}

@keyframes blink-cursor {
  0%, 60% { opacity: 1; }
  61%, 100% { opacity: 0; }
}

.navbar-links {
  display: flex;
  align-items: center;
  gap: 1.2rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.navbar-links li a {
  color: var(--text-color);
  text-decoration: none;
  font-size: 0.97rem;
  font-weight: 400;
  position: relative;
  padding-bottom: 2px;
  transition: color 0.2s;
  display: flex;
  align-items: center;
  gap: 0.4em;
}

.navbar-links li a::after {
  content: "";
  display: block;
  position: absolute;
  left: 0; right: 0; bottom: 0;
  height: 2px;
  background: var(--text-color);
  transform: scaleX(0);
  transition: transform 0.4s cubic-bezier(.4,0,.2,1);
  transform-origin: left;
  border-radius: 2px;
}

.navbar-links li a:hover::after {
  transform: scaleX(1);
}

.navbar-links li a:hover {
  color: var(--text-color);
}

.nav-icon {
  font-size: 1em;
  transition: transform 0.3s cubic-bezier(.4,0,.2,1), color 0.3s cubic-bezier(.4,0,.2,1);
  color: #fff;
}

.navbar-links li a:hover .nav-icon {
  transform: scale(1.18) rotate(-8deg);
  color: #e0e0e0;
}
</style>

<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-links">
        <a href="#" aria-label="GitHub"><i class="fab fa-github"></i></a>
        <a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
        <a href="#" aria-label="LinkedIn"><i class="fab fa-linkedin"></i></a>
      </div>
      <div class="footer-info">
        &copy; 2025 <span class="name">Sahil Nayak</span>. All rights reserved.
      </div>
      <div class="footer-info">
        Website running for <span id="created-time">loading...</span>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  const createdDate = new Date('2024-12-28')
  const now = new Date()
  const diffTime = now - createdDate
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24))
  const plural = diffDays === 1 ? 'day' : 'days'
  document.getElementById('created-time').innerText = `${diffDays} ${plural}`
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Coder&display=swap');

.footer {
  width: 100%;
  background-color: var(--nav-bg);
  color: var(--text);
  padding: 2rem 0;
  text-align: center;
  box-sizing: border-box;
  border-top: 2px dashed var(--border-color);
  font-family: 'Coder', monospace;
}

.footer-content {
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
}

.footer-links {
  display: flex;
  gap: 16px;
  font-size: 1.9rem;
  justify-content: center;
}

.footer-links a {
  color: var(--text);
  text-decoration: none;
  transition: color 0.3s;
}

.footer-links a:hover {
  color: var(--hover-color);
}

.footer-info {
  font-size: 1.5rem;
  opacity: 0.8;
}

.name {
  font-weight: bold;
}

@media (max-width: 768px) {
  .footer-content {
    gap: 1rem;
  }

  .footer-links {
    font-size: 1.5rem;
  }

  .footer-info {
    font-size: 1.2rem;
  }
}
</style>

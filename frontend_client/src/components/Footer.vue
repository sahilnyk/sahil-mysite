<template>
  <footer class="footer">
    <div class="footer-content">
      <span class="footer-days" v-if="daysUp !== null">
        Page up for {{ daysUp }} {{ daysUp === 1 ? 'day' : 'days' }}
      </span>
      <span>© {{ new Date().getFullYear() }} Sahil Nayak &middot; Created on 2nd Nov 2023</span>
      <span class="footer-links">
        <a href="https://github.com/sahilnayak" target="_blank" aria-label="GitHub">
          <i class="fab fa-github"></i>
          <span class="footer-label">code</span>
        </a>
        <a href="https://twitter.com/sahilnayak" target="_blank" aria-label="Twitter">
          <i class="fab fa-twitter"></i>
          <span class="footer-label">tweets</span>
        </a>
        <a href="mailto:sahilnayak@example.com" aria-label="Email">
          <i class="fas fa-envelope"></i>
          <span class="footer-label">mail me</span>
        </a>
      </span>
    </div>
  </footer>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const daysUp = ref(null)

onMounted(() => {
  const created = new Date('2023-11-02')
  const now = new Date()
  const diffDays = Math.floor((now - created) / (1000 * 60 * 60 * 24))
  daysUp.value = diffDays
})
</script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css');

.footer {
  width: 100%;
  color: var(--text-color);
  font-family: 'Cascadia Code', monospace;
  background: none;
  border: none;
  padding: 1.5rem 0 1rem 0;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.7rem;
  animation: fadeInFooter 1.1s cubic-bezier(.4,0,.2,1);
}

@keyframes fadeInFooter {
  from { opacity: 0; transform: translateY(24px);}
  to { opacity: 1; transform: translateY(0);}
}

.footer-days {
  font-size: 1.08em;
  color: #b0bec5;
  letter-spacing: 0.01em;
  margin-bottom: 2px;
}

.footer-links {
  display: flex;
  gap: 1.1rem;
  margin-bottom: 0.5rem;
}

.footer-links a {
  color: #b0bec5;
  text-decoration: none;
  font-weight: 400;
  font-size: 1.18em;
  margin: 0;
  transition: color 0.22s, transform 0.22s cubic-bezier(.4,0,.2,1);
  opacity: 0.85;
  will-change: color, transform;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.04em;
}

.footer-links a:hover {
  color: var(--accent-color, #90caf9);
  transform: scale(1.12) translateY(-1px);
  opacity: 1;
}

.footer-links i {
  vertical-align: middle;
}

.footer-label {
  font-size: 0.82em;
  color: #b0bec5;
  opacity: 0.8;
  font-weight: 400;
  letter-spacing: 0.01em;
  margin-top: 0;
  transition: color 0.22s;
}

.footer-links a:hover .footer-label {
  color: var(--accent-color, #90caf9);
  opacity: 1;
}

@media (max-width: 600px) {
  .footer-content {
    padding: 0 0.5rem;
    gap: 0.5rem;
  }
  .footer-links {
    gap: 0.7rem;
    flex-wrap: wrap;
    justify-content: center;
  }
  .footer-links a {
    font-size: 1em;
    gap: 0.02em;
  }
  .footer-label {
    font-size: 0.9em;
  }
}
</style>

<template>
  <footer>
    <p>© 2024 Sahil Nayak. All rights reserved. | Self-Taught Developer</p>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
};
</script>

<style scoped>
/* Define CSS variables for dark and light mode */
:root {
  --footer-text-color-light: #333;
  --footer-text-color-dark: #ffffff;
  --footer-border-color-light: #ddd;
  --footer-border-color-dark: #444;
}

footer {
  color: var(--footer-text-color-light);
  text-align: center;
  padding: 1em 2em;
  margin-top: auto;
  width: 100%;
  position: relative;
  bottom: 0;
  border-top: 1px solid var(--footer-border-color-light);
}

footer p {
  margin: 0;
  font-size: 14px;
}

/* Light mode adjustments */
.light-mode footer {
  color: var(--footer-text-color-light);
  border-top: 1px solid var(--footer-border-color-light);
}

/* Dark mode adjustments */
.dark-mode footer {
  color: var(--footer-text-color-dark);
  border-top: 1px solid var(--footer-border-color-dark);
}

footer:hover {
  color: orange;
  /* Color on hover */
  border-color: #00f;
  /* Border color on hover */
}

/* Responsive adjustments */
@media (max-width: 768px) {
  footer {
    padding: 0.5em 1em;
  }

  footer p {
    font-size: 12px;
  }
}
</style>

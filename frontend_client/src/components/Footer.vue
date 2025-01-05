<template>
  <footer>
    <p>© 2025 Sahil Nayak. All rights reserved. | Self-Taught Developer</p>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
};
</script>

<style scoped>

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
  font-family: 'M PLUS Code', monospace;
}

footer p {
  margin: 0;
  font-size: 14px;
}


.light-mode footer {
  color: var(--footer-text-color-light);
  border-top: 1px solid var(--footer-border-color-light);
}


.dark-mode footer {
  color: var(--footer-text-color-dark);
  border-top: 1px solid var(--footer-border-color-dark);
}

footer:hover {
  color: rgb(103, 255, 197);
 
  border-color: #00f;
  
}


@media (max-width: 768px) {
  footer {
    padding: 0.5em 1em;
  }

  footer p {
    font-size: 12px;
    font-family: 'M PLUS Code', monospace;
  }
}
</style>

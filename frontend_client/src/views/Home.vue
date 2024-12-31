<template>
  <div>
    <h1>Welcome To my personal site!</h1>

    <p class="typography">
      I’m a self-taught developer passionate about technology.<br>
      This is my first step to get freedom in the tech world.<br>
      This space showcases my projects, blogs, and insights.<br>
      I’m constantly learning and evolving, excited to share my journey with you.<br>
      Feel free to browse my work and reach out with any questions or ideas.<br>
      Thanks for stopping by!
    </p>
  </div>
</template>

<script>
export default {
  name: 'Home'
};
</script>

<style scoped>
main {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 70vh;
}

h1 {
  font-family: 'Courier New', monospace;
  font-size: medium;
  color: limegreen;
  /* Set text color to white */
  font-weight: bold;
  /* Optional: Ensure normal font weight */
  padding-top: 20px;
  padding-bottom: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* Center align text */
}

/* Typography effect for the paragraph */
.typography {
  font-family: 'Courier New', monospace;
  font-size: 1rem;
  /* Base font size */
  line-height: 1.5;
  color: #333;
  text-shadow: 0.5px 0.5px 1px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  white-space: nowrap;
  border-right: 0.15em solid orange;
  animation: typing 6s steps(50, end), blink-caret 0.75s step-end infinite;
}

/* Typewriter effect */
@keyframes typing {
  from {
    width: 0;
  }

  to {
    width: 100%;
  }
}

/* Blinking cursor effect */
@keyframes blink-caret {

  from,
  to {
    border-color: transparent;
  }

  50% {
    border-color: orange;
  }
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .typography {
    font-size: 0.9rem;
    /* Smaller font size for tablets and phones */
    white-space: normal;
    /* Allow text to wrap on smaller screens */
    border-right: none;
    /* Remove cursor effect on smaller screens */
  }

  h1 {
    font-size: 1.2rem;
    /* Adjust font size for smaller screens */
  }
}

@media (max-width: 480px) {
  .typography {
    font-size: 0.8rem;
    /* Even smaller font size for very small screens */
  }

  h1 {
    font-size: 1rem;
    /* Further adjust font size for very small screens */
  }
}
</style>

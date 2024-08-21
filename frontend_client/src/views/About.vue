<!-- <template>
    <div>
        <h1>About Page</h1>
        <p>Information about us.</p>
    </div>
</template>
  
<script>
export default {
    name: 'About'
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
    color: #42b983;
}
</style> -->


<template>
    <div>
        <h1>Here is the <span class="highlight"> progress </span> of my journey!</h1>
        <p class="typography">
            I’m a self-taught developer passionate about technology.<br>
            This space showcases my projects, blogs, and insights.<br>
            I’m constantly learning and evolving, excited to share my journey with you.<br>
            Feel free to browse my work and reach out with any questions or ideas.<br>
            Thanks for stopping by!<br>
            This is my first step to get freedom in the tech world.
        </p>
    </div>
</template>
  
<script>
export default {
    name: 'About'
};
</script>
  
<style scoped>
main {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 70vh;
    text-align: center;
}

h1 {
    font-family: 'Courier New', monospace;
    font-size: medium;
    padding-top: 15px;
    font-weight: bold;
    color: #ffffff;
    display: flex;
    justify-content: center;
    /* Adjust this color as needed */
}

.highlight {
    color: #2ecc71;

    /* Adjust this color as needed */
}

.typography {
    font-family: 'Courier New', monospace;
    font-size: medium;
    line-height: 1.5;
    color: #333;
    /* Ensure readability on dark backgrounds */
    text-shadow: 0.5px 0.5px 1px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    white-space: nowrap;
    border-right: 0.15em solid orange;
    animation: typing 6s steps(50, end), blink-caret 0.75s step-end infinite;
}

@keyframes typing {
    from {
        width: 0;
    }

    to {
        width: 100%;
    }
}

@keyframes blink-caret {

    from,
    to {
        border-color: transparent;
    }

    50% {
        border-color: orange;
    }
}

@media (max-width: 768px) {
    h1 {
        font-size: 1.2rem;
        /* Adjust font size for smaller screens */
    }

    .typography {
        font-size: 0.9rem;
        /* Adjust font size for smaller screens */
    }
}
</style>
  
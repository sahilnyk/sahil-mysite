<template>
    <div class="construction-banner">
        🚧 Site is under construction, thank you for visiting! Please check back soon. 🚧
    </div>
</template>
  
<style scoped>
.construction-banner {
    width: 100%;
    background: linear-gradient(90deg, #f39c12, #e74c3c);
    color: white;
    text-align: center;
    padding: 8px 0;
    padding-top: 2px;
    padding-bottom: 2px;
    font-size: 16px;
    font-weight: bold;
    /* font-family: 'Roboto', sans-serif; */
    font-family: monospace;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    position: fixed;
    left: 0;
    z-index: 9999;
}

@media (min-width: 768px) {
    .construction-banner {
        top: 60px;
        /* Adjust based on your navbar height on larger screens */
    }
}

@media (max-width: 767px) {
    .construction-banner {
        top: 50px;
        /* Adjust based on your navbar height on smaller screens */
        font-size: 14px;
        /* Smaller font size for mobile devices */
        padding: 6px 0;
        /* Smaller padding for mobile devices */
    }
}
</style>
  
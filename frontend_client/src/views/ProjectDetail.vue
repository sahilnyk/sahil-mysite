<template>
    <div>
      <!-- ProjectDetail component now expects a slug as a prop -->
      <ProjectDetail :slug="slug" />
    </div>
  </template>
  
  <script>
  import ProjectDetail from '@/components/ProjectDetail.vue';
  
  export default {
    components: {
      ProjectDetail,
    },
    data() {
      return {
        slug: this.$route.params.slug, // Slug from route params
      };
    },
  };
  </script>
  
  <style scoped>
  /* You can add specific styles for this view if necessary */
  </style>
  
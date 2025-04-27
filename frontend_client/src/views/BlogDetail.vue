<template>
  <div>
    <!-- BlogDetail component now expects a slug as a prop -->
    <BlogDetail :slug="slug" />
  </div>
</template>

<script>
import BlogDetail from '@/components/BlogDetail.vue';

export default {
  components: {
    BlogDetail,
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

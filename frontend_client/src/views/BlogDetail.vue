<template>
  <div class="detail-view">
    <BlogDetail :slug="slug" />
  </div>
</template>

<script>
import BlogDetail from '@/components/BlogDetail.vue';

export default {
  components: { BlogDetail },
  computed: {
    slug() {
      return this.$route.params.slug;
    }
  }
};
</script>

<style scoped>
.detail-view {
  min-height: 70vh;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 40px 0 20px 0;
}
</style>

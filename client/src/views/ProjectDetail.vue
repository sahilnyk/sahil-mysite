<template>
  <div class="detail-view">
    <ProjectDetail :slug="slug" />
  </div>
</template>

<script>
import ProjectDetail from '@/components/ProjectDetail.vue';

export default {
  components: { ProjectDetail },
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

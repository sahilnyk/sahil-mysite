<template>
  <div class="blogs">
    <!-- Blog Info Section -->
    <div class="blog-info">
      <h1 class="info-title">
        Why I Write Blogs 📝
      </h1>
      <p class="info-text">
        The main motive behind writing blogs is to maintain a journal of my tasks and learnings. 
        All the blogs are based on my opinions and experiences, and I hope they provide value to others.
      </p>
      <img src="@/assets/guruji.png" alt="Blogging Motivation" class="info-image" />
    </div>

    <!-- Blog List Section -->
    <div class="blog-list-container">
      <BlogList />
    </div>
  </div>
</template>

<script>
import BlogList from '@/components/BlogList.vue';

export default {
  components: {
    BlogList
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@300;700&display=swap');

/* (Your styles remain the same) */
.blogs {
  text-align: center;
  padding: 80px 20px 20px;
  color: var(--text-color);
}

.blog-info {
  max-width: 600px;
  margin: 0 auto 30px auto;
  text-align: left;
}

.info-title {
  font-size: 1.2rem;
  font-family: 'Source Code Pro', monospace;
  font-weight: 700;
  margin-bottom: 10px;
  color: #63f861;
}

.info-text {
  font-size: 1rem;
  font-family: 'Source Code Pro', monospace;
  line-height: 1.6;
  color: #b4b8ba;
}

.blog-list-container {
  max-width: 800px;
  margin: 0 auto;
}

:root {
  --text-color: #d4d4d4;
}

@media (max-width: 768px) {
  .blog-info {
    text-align: center;
  }
  .info-text {
    font-size: 0.9rem;
  }
}

.info-image {
  display: block;
  margin: 20px auto;
  max-width: 100%;
  height: auto;
  box-shadow: 0 4px 6px rgba(47, 47, 47, 0.1);
}
</style>

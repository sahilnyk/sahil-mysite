<template>
  <div class="blogs">
    <!-- Blog Info Section -->
    <div class="blog-info">
      <h1 class="info-title">&gt; Why I write blogs?</h1> <!-- Changed title color -->
      <div class="info-text">
        <p>
          I write blogs to keep a personal journal of my work, experiments, and learning.
          All blogs are based on my opinions and experience — hope they help someone too!
        </p>
        <p>
          ➔ I am using Render free hosting, so it might take a few seconds to start the server 🚀.
        </p>
        <p>
          ➔ You can also find all my blogs on
          <a href="https://hashnode.com/@sahilnyk" target="_blank" class="hashnode-link">
            <i class="fab fa-hashnode"></i> Hashnode
          </a>.
        </p>
      </div>
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
    BlogList,
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@300;700&display=swap');

.blogs {
  text-align: center;
  padding: 80px 20px 20px;
  color: var(--text-color);
  font-family: 'Source Code Pro', monospace;
}

.blog-info {
  max-width: 700px;
  margin: 0 auto 50px auto;
  text-align: left;
  padding-bottom: 20px;
  /* border-bottom: 2px dashed var(--border-color, #ccc); */
}

.info-title {
  font-size: 1.7rem;
  font-weight: bold;
  margin-bottom: 20px;
  color: #ff6f61; /* Updated color for the title */
}

.info-text p {
  font-size: 1.4rem;
  line-height: 1.6;
  color: #b4b8ba;
  margin-bottom: 15px;
}

.hashnode-link {
  color: #2962ff;
  text-decoration: none;
  font-weight: bold;
  display: inline-flex;
  align-items: center;
}

.hashnode-link i {
  margin-right: 5px;
}

.hashnode-link:hover {
  text-decoration: underline;
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
  .info-text p {
    font-size: 0.95rem;
  }
}
</style>

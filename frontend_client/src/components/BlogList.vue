<template>
  <div class="content">
    <!-- <h1 class="main-title">My Blog Posts</h1> -->

    <!-- Blog list rendering here -->
    <div v-if="loading" class="loading"></div>
    <div v-else>
      <div v-for="blog in blogs" :key="blog.slug" class="blog-post">
        <router-link :to="`/blogs/${blog.slug}`" class="blog-title">
          {{ blog.title }}
        </router-link>
        <div class="blog-date">{{ formattedDate(blog.date) }}</div>
        <div class="blog-excerpt">{{ blog.excerpt }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlogList",
  data() {
    return {
      blogs: [],
      loading: true,
    };
  },
  mounted() {
    this.fetchBlogs();
  },
  methods: {
    async fetchBlogs() {
      try {
        const response = await fetch("https://bofmysite.onrender.com/blogs/");
        if (response.ok) {
          this.blogs = await response.json();
        }
      } catch (error) {
        console.error("Failed to fetch blogs:", error);
      } finally {
        this.loading = false;
      }
    },
    formattedDate(date) {
      const options = { year: "numeric", month: "2-digit", day: "2-digit" };
      return new Date(date).toLocaleDateString("en-US", options);
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@300;700&display=swap");

.content {
  flex: 1;
  padding: 40px 20px;
  font-family: "Source Code Pro", monospace;
}

.main-title {
  color: var(--text-color);
}

.loading {
  color: var(--border-color);
  text-align: center;
  font-size: 1.2rem;
  margin-top: 40px;
}

.blog-post {
  border-bottom: 2px dashed var(--border-color);
  padding: 20px 0;
}

.blog-title {
  color: var(--hover-color);
  font-weight: bold;
  font-size: 1.5rem;
  transition: color 0.2s;
  text-decoration: none;
}

.blog-title:hover {
  color: var(--hover-color);
  text-decoration: underline;
}

.blog-date {
  color: var(--border-color);
  font-size: 0.9rem;
  margin-bottom: 8px;
}

.blog-excerpt {
  color: var(--text-color);
  font-size: 1.1rem;
}
</style>

<template>
  <div class="blogs">
    <h1>Blogs</h1>
    <div class="blog-item" v-for="blog in blogs" :key="blog.id">
      <router-link :to="{ name: 'BlogDetail', params: { id: blog.id } }" class="blog-title">
        <h2>{{ blog.title }}</h2>
      </router-link>
      <p class="created-at">{{ new Date(blog.created_at).toLocaleDateString() }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blogs: []
    };
  },
  created() {
    this.fetchBlogs();
  },
  methods: {
    async fetchBlogs() {
      const response = await fetch('https://bofmysite.onrender.com/api/blogs/');
      const data = await response.json();
      this.blogs = data;
    }
  }
};
</script>

<style scoped>
.blogs {
  text-align: center;
  padding: 20px;
}

.blog-item {
  margin: 20px 0;
  padding: 10px;
  border-bottom: 1px solid #ddd;
  background-color: #f9f9f9;
}

.blog-title {
  color: #007bff;
  font-size: 1.2rem;
  text-decoration: none;
}

.blog-title:hover {
  text-decoration: underline;
}

.created-at {
  color: #888;
  font-size: 0.9rem;
}
</style>

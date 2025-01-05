<template>
  <div class="blogs">
    <h1>Blogs</h1>
    <table class="blog-table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Created At</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="blog in blogs" :key="blog.id" class="blog-item">
          <td>
            <router-link :to="{ name: 'BlogDetail', params: { id: blog.id } }" class="blog-title">
              {{ blog.title }}
            </router-link>
          </td>
          <td>{{ new Date(blog.created_at).toLocaleDateString() }}</td>
        </tr>
      </tbody>
    </table>
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

.blog-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  font-family: 'Source Code Pro', monospace;
}

.blog-table th,
.blog-table td {
  padding: 10px;
  border: 1px solid #ddd;
  text-align: left;
}

.blog-title {
  color: #007bff;
  font-size: 1.2rem;
  text-decoration: none;
  font-family: 'Source Code Pro', monospace;
}

.blog-title:hover {
  text-decoration: underline;
  color: aqua;
}

.blog-item:hover {
  background-color: #f1f1f1;
  cursor: pointer;
}

.created-at {
  color: #888;
  font-size: 0.9rem;
}
</style>

<template>
  <div>
    <h1>Blogs</h1>
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Created At</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="blog in blogs" :key="blog.id">
          <td>
            <router-link :to="{ name: 'BlogDetail', params: { id: blog.id } }">
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
table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  padding: 0.5rem;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

a {
  color: #007bff;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>


<style scoped>
.blogs {
  text-align: center;
  padding: 20px;
}

.blog-item {
  margin: 20px 0;
  padding: 10px;
  border-bottom: 1px solid #ddd;
}

a:hover {
  text-decoration: underline;
}
</style>


<!-- <style scoped>
table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  padding: 0.5rem;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

a {
  color: #007bff;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style> -->
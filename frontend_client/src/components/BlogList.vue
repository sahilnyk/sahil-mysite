<template>
  <div class="content">
    <h1>My Blog Posts</h1>

    <div v-if="blogs.length" v-for="blog in blogs" :key="blog.id" class="blog-post">
      <router-link
        :to="{ name: 'BlogDetail', params: { id: blog.id } }"
        class="blog-title"
      >
        {{ blog.title }}
      </router-link>
      <div class="blog-date">{{ formatDate(blog.date) }}</div>
      <div class="blog-excerpt">
        {{ blog.desc ? blog.desc.slice(0, 120) + '...' : 'No content available.' }}
      </div>
    </div>

    <div v-else>
      Loading blogs...
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blogs: [],
    };
  },
  created() {
    this.fetchBlogs();
  },
  methods: {
    async fetchBlogs() {
      try {
        const response = await fetch('https://bofmysite.onrender.com/api/blogs/');
        const data = await response.json();
        this.blogs = data;
      } catch (error) {
        console.error('Failed to fetch blogs:', error);
      }
    },
    formatDate(dateStr) {
      const date = new Date(dateStr);
      return date.toLocaleDateString(undefined, {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      });
    },
  },
};
</script>

<style scoped>
.content {
  flex: 1;
  padding: 40px 20px;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  font-family: 'Source Code Pro', monospace;
}

h1 {
  font-size: 24px;
  border-bottom: 1px dashed var(--border-color, #ccc);
  padding-bottom: 10px;
  margin-bottom: 30px;
}

.blog-post {
  margin-bottom: 40px;
  padding-bottom: 20px;
  border-bottom: 1px dashed var(--border-color, #ccc);
}

.blog-title {
  font-size: 18px;
  font-weight: bold;
  color: var(--hover-color, navy);
  text-decoration: none;
}

.blog-title:hover {
  color: var(--hover-color, lightblue);
  text-decoration: underline;
}

.blog-date {
  font-size: 12px;
  color: gray;
  margin-bottom: 10px;
}

.blog-excerpt {
  font-size: 14px;
  color: var(--text, #000);
}
</style>

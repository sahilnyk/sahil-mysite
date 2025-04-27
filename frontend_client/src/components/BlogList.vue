<template>
  <div class="content">
    <h1 class="main-title">My Blog Posts</h1>

    <div v-if="loading" class="loading">Loading blogs...</div>
    <div v-else>
      <div v-for="blog in blogs" :key="blog.id" class="blog-post">
        <router-link :to="`/blogs/${blog.slug}`" class="blog-title">
          {{ blog.title }}
        </router-link>
        <div class="blog-date">{{ formatDate(blog.date) }}</div>
        <div class="blog-excerpt">{{ getExcerpt(blog.desc) }}</div>
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
        const data = await response.json();
        this.blogs = data;
      } catch (error) {
        console.error("Failed to fetch blogs:", error);
      } finally {
        this.loading = false;
      }
    },
    formatDate(dateString) {
      if (!dateString) return "";
      const options = { year: "numeric", month: "short", day: "numeric" };
      return new Date(dateString).toLocaleDateString(undefined, options);
    },
    getExcerpt(html) {
      if (!html) return "";
      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = html;
      const text = tempDiv.textContent || tempDiv.innerText || "";
      const words = text.trim().split(/\s+/);
      return words.slice(0, 10).join(" ") + (words.length > 10 ? "..." : "");
    },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@300;700&display=swap');

.content {
  flex: 1;
  padding: 40px 20px;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  font-family: 'Source Code Pro', monospace;
}

.main-title {
  font-size: 26px;
  font-weight: bold;
  text-align: left; /* Left align the title */
  margin-bottom: 30px;
  color: var(--text-color, #333);
  border-bottom: none; /* Removed the dashed line here */
}

.loading {
  text-align: center;
  font-size: 16px;
  color: gray;
}

.blog-post {
  margin-bottom: 40px;
  padding-bottom: 20px;
  border-bottom: 2px dashed var(--border-color, #ccc);
}

.blog-title {
  font-size: 20px;
  font-weight: bold;
  color: rgb(63, 63, 208); /* Navy blue for blog titles */
  text-decoration: none;
  transition: color 0.3s, border-bottom 0.3s;
  display: block; /* Ensure title spans entire width */
  text-align: left; /* Align title to the left */
}

.blog-title:hover {
  color: lightblue;
  /* border-bottom: 1px dashed lightblue; */
}

.blog-date {
  font-size: 15px;
  color: gray;
  margin-top: 5px;
  margin-bottom: 10px;
  text-align: left; /* Align date to the left */
}

.blog-excerpt {
  font-size: 14px;
  color: var(--text-color, #555);
  text-align: left; /* Align excerpt to the left */
}

/* Adding root variables fallback */
:root {
  --border-color: #ccc;
  --hover-color: navy;
  --hover-color-hover: lightblue;
  --text-color: #222;
}
</style>

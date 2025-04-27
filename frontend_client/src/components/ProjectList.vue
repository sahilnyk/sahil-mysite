<template>
  <div class="content">
    <h1 class="main-title">My Projects</h1>

    <div v-if="loading" class="loading">Loading projects...</div>
    <div v-else>
      <div v-for="project in projects" :key="project.id" class="project-item">
        <router-link :to="`/projects/${project.slug}`" class="project-title">
          {{ project.title }}
        </router-link>
        <div class="project-date">{{ formatDate(project.date) }}</div>
        <div class="project-excerpt">{{ getExcerpt(project.desc) }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectList",
  data() {
    return {
      projects: [],
      loading: true,
    };
  },
  mounted() {
    this.fetchProjects();
  },
  methods: {
    async fetchProjects() {
      try {
        const response = await fetch("https://bofmysite.onrender.com/projects/");
        const data = await response.json();
        this.projects = data;
      } catch (error) {
        console.error("Failed to fetch projects:", error);
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
  text-align: left;
  margin-bottom: 30px;
  color: var(--text-color, #333);
  border-bottom: none;
}

.loading {
  text-align: center;
  font-size: 16px;
  color: gray;
}

.project-item {
  margin-bottom: 40px;
  padding-bottom: 20px;
  border-bottom: 2px dashed var(--border-color, #ccc);
}

.project-title {
  font-size: 20px;
  font-weight: bold;
  color: rgb(63, 63, 208); /* Navy blue for project titles */
  text-decoration: none;
  transition: color 0.3s, border-bottom 0.3s;
  display: block;
  text-align: left;
}

.project-title:hover {
  color: lightblue;
}

.project-date {
  font-size: 15px;
  color: gray;
  margin-top: 5px;
  margin-bottom: 10px;
  text-align: left;
}

.project-excerpt {
  font-size: 14px;
  color: var(--text-color, #555);
  text-align: left;
}

:root {
  --border-color: #ccc;
  --hover-color: navy;
  --hover-color-hover: lightblue;
  --text-color: #222;
}
</style>

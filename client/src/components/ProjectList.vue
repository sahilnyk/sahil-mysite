<template>
  <div class="content">
    <!-- <h1 class="main-title">My Projects</h1> -->

    <!-- Project list rendering here -->
    <div v-if="loading" class="loading"></div>
    <div v-else>
      <div v-for="project in projects" :key="project.slug" class="project-item">
        <router-link :to="`/projects/${project.slug}`" class="project-title">
          {{ project.title }}
        </router-link>
        <div class="project-date">{{ project.year }}</div>
        <div class="project-excerpt">{{ project.excerpt }}</div>
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
        if (response.ok) {
          this.projects = await response.json();
        }
      } catch (error) {
        console.error("Failed to fetch projects:", error);
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@300;700&display=swap');

.content {
  flex: 1;
  padding: 40px 20px;
  font-family: 'Source Code Pro', monospace;
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

.project-item {
  border-bottom: 2px dashed var(--border-color);
  padding: 20px 0;
}

.project-title {
  color: var(--hover-color);
  font-weight: bold;
  font-size: 1.5rem;
  transition: color 0.2s;
  text-decoration: none;
}

.project-title:hover {
  color: var(--hover-color);
  text-decoration: underline;
}

.project-date {
  color: var(--border-color);
  font-size: 0.9rem;
  margin-bottom: 8px;
}

.project-excerpt {
  color: var(--text-color);
  font-size: 1.1rem;
}
</style>

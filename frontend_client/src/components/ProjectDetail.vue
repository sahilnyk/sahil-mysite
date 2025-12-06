<template>
  <div class="project-detail-container" v-if="project">
    <div class="project-header">
      <h1 class="project-title">{{ project.title }}</h1>
      <div class="project-meta">
        <div class="meta-item">
          <strong>Stack:</strong> <span>{{ project.stack }}</span>
        </div>
        <div class="meta-item">
          <strong>Year:</strong> <span>{{ project.year }}</span>
        </div>
      </div>
    </div>

    <div class="project-content">
      <p v-html="project.desc"></p>
    </div>

    <div class="project-footer">
      <a v-if="project.link" :href="project.link" target="_blank" class="project-link read-more">
        View Project
      </a>
    </div>
  </div>

  <div class="loading" v-else>
    <p>Loading...</p>
  </div>
</template>

<script>
export default {
  name: "ProjectDetail",
  props: {
    slug: String
  },
  data() {
    return {
      project: null
    };
  },
  async created() {
    try {
      const response = await fetch(`https://bofmysite.onrender.com/projects/${this.slug}/`);
      if (response.ok) {
        this.project = await response.json();
      } else {
        console.error('Failed to fetch project details.');
      }
    } catch (error) {
      console.error('Error fetching project details:', error);
    }
  }
};
</script>

<style scoped>
.project-detail-container {
  max-width: 900px;
  margin: 50px auto;
  padding: 20px;
  font-family: 'Source Code Pro', monospace;
  color: var(--text-color);
  background-color: var(--bg-color);
  transition: background-color 0.3s ease;
}

.project-title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 15px;
  color: var(--text-color);
}

.project-meta {
  display: flex;
  gap: 20px;
  font-size: 1.1rem;
  color: var(--border-color);
}

.meta-item {
  display: inline-flex;
  align-items: center;
  padding: 8px 16px;
  border: 1px dashed var(--border-color);
}

.meta-item strong {
  font-weight: 800;
  margin-right: 5px;
}

.project-content {
  font-size: 1.3rem;
  line-height: 1.8;
  margin-top: 20px;
  color: var(--text-color);
}

.project-footer {
  text-align: center;
  margin-top: 30px;
}

.project-link {
  font-size: 1rem;
  text-decoration: none;
  color: var(--hover-color);
  font-weight: 600;
  padding: 10px 20px;
  background-color: var(--bg-color);
  border: 1px dashed var(--hover-color);
  display: inline-block;
  text-align: center;
  transition: background-color 0.3s, color 0.3s;
  border-radius: 0;
}

.project-link:hover {
  background-color: var(--hover-color);
  color: var(--bg-color);
}

.loading {
  text-align: center;
  font-size: 1.2rem;
  color: var(--border-color);
  margin-top: 50px;
}

@media (max-width: 768px) {
  .project-detail-container {
    padding: 15px;
  }
  .project-title {
    font-size: 1.6rem;
  }
  .project-meta {
    font-size: 1rem;
    flex-direction: column;
  }
}
</style>

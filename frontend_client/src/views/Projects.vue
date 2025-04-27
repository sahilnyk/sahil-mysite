<template>
  <div class="projects">
    <!-- Project Info Section -->
    <div class="project-info">
      <h1 class="info-title">&gt; Why I build projects?</h1> <!-- Changed title color -->
      <div class="info-text">
        <p>
          I build projects to explore new technologies, experiment with different concepts, and solve real-world problems.
          Each project reflects my journey and my passion for learning.
        </p>
        <p>
          ➔ I am using Render free hosting, so it might take a few seconds to start the server 🚀.
        </p>
        <p>
          ➔ You can also find more about my projects on
          <a href="https://github.com/sahilnyk" target="_blank" class="github-link">
            <i class="fab fa-github"></i> GitHub
          </a>.
        </p>
      </div>
    </div>

    <!-- Project List Section -->
    <div class="project-list-container">
      <ProjectList />
    </div>
  </div>
</template>

<script>
import ProjectList from '@/components/ProjectList.vue';

export default {
  components: {
    ProjectList,
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@300;700&display=swap');

.projects {
  text-align: center;
  padding: 80px 20px 20px;
  color: var(--text-color);
  font-family: 'Source Code Pro', monospace;
}

.project-info {
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

.github-link {
  color: #2962ff;
  text-decoration: none;
  font-weight: bold;
  display: inline-flex;
  align-items: center;
}

.github-link i {
  margin-right: 5px;
}

.github-link:hover {
  text-decoration: underline;
}

.project-list-container {
  max-width: 800px;
  margin: 0 auto;
}

:root {
  --text-color: #d4d4d4;
}

@media (max-width: 768px) {
  .project-info {
    text-align: center;
  }
  .info-text p {
    font-size: 0.95rem;
  }
}
</style>

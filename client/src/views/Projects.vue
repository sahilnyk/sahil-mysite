<template>
  <div class="projects">
    <!-- Info Section -->
    <div class="project-info">
      <div class="info-line">&gt; Site and database are deployed on <b>Render</b></div>
      <div class="info-line">&gt; Projects may take a few seconds to load.</div>
      <div class="info-line">
        &gt; If not loading, check my
        <a href="https://github.com/sahilnayak" target="_blank" class="github-link">
          <i class="fab fa-github"></i> GitHub
        </a>
        for repositories.
      </div>
    </div>

    <!-- Loading Animation -->
    <div v-if="isLoading" class="loading-section">
      <div class="loading-spinner"></div>
      <span class="loading-text">
        Loading projects...
      </span>
    </div>

    <!-- Project List Section -->
    <div v-else class="project-list-container">
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
  data() {
    return {
      isLoading: true,
    };
  },
  mounted() {
    // Simulate loading delay (replace with real API call logic)
    setTimeout(() => {
      this.isLoading = false;
    }, 1800);
  },
};
</script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css');
@import url('https://fonts.googleapis.com/css2?family=Cascadia+Code:wght@400;700&display=swap');

.projects {
  text-align: center;
  padding: 48px 12px 12px;
  color: var(--text-color);
  font-family: 'Cascadia Code', monospace;
}

.project-info {
  max-width: 700px;
  margin: 0 auto 20px auto;
  text-align: left;
  font-size: 15px;
  color: #b0bec5;
  letter-spacing: 0.01em;
  font-family: 'Cascadia Code', monospace;
  font-weight: 400;
}

.info-line {
  margin-bottom: 7px;
  line-height: 1.6;
  font-size: 15px;
  font-family: 'Cascadia Code', monospace;
  font-weight: 400;
  display: flex;
  align-items: center;
  gap: 4px;
}

.github-link {
  color: #90caf9;
  text-decoration: none;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  gap: 3px;
  font-size: 15px;
  font-family: 'Cascadia Code', monospace;
  transition: color 0.2s;
}

.github-link i {
  margin-right: 1px;
}

.github-link:hover {
  color: #64b5f6;
  text-decoration: underline;
}

.loading-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 40px;
  margin: 14px 0 8px 0;
  animation: fadeInLoading 0.8s cubic-bezier(.4,0,.2,1);
}

@keyframes fadeInLoading {
  from { opacity: 0; transform: translateY(10px);}
  to { opacity: 1; transform: translateY(0);}
}

.loading-spinner {
  width: 14px;
  height: 14px;
  border: 2px solid #90caf9;
  border-top: 2px solid #222;
  border-radius: 50%;
  animation: spin 1.1s linear infinite;
  margin-bottom: 6px;
}

@keyframes spin {
  0% { transform: rotate(0);}
  100% { transform: rotate(360deg);}
}

.loading-text {
  font-size: 13px;
  color: #90caf9;
  letter-spacing: 0.01em;
  opacity: 0.85;
  font-family: 'Cascadia Code', monospace;
  font-weight: 400;
}

.project-list-container {
  max-width: 800px;
  margin: 0 auto;
  animation: fadeInProjects 0.7s cubic-bezier(.4,0,.2,1);
}

@keyframes fadeInProjects {
  from { opacity: 0; transform: translateY(8px);}
  to { opacity: 1; transform: translateY(0);}
}

@media (max-width: 768px) {
  .projects {
    padding: 24px 2px 4px;
  }
  .project-info {
    font-size: 13px;
  }
  .info-line,
  .github-link {
    font-size: 13px;
  }
  .project-list-container {
    max-width: 99vw;
  }
  .loading-section {
    min-height: 28px;
    margin: 8px 0 2px 0;
  }
  .loading-spinner {
    width: 10px;
    height: 10px;
    margin-bottom: 3px;
  }
  .loading-text {
    font-size: 11px;
  }
}

@media (max-width: 600px) {
  .projects {
    padding: 18px 2vw 4px;
  }
  .project-info {
    font-size: 12px;
    padding-left: 2px;
    padding-right: 2px;
    max-width: 98vw;
  }
  .info-line,
  .github-link {
    font-size: 12px;
    gap: 2px;
    flex-wrap: wrap;
    word-break: break-word;
  }
  .info-line {
    margin-bottom: 5px;
  }
  .project-list-container {
    max-width: 99vw;
    padding-left: 0;
    padding-right: 0;
  }
  .loading-section {
    min-height: 22px;
    margin: 6px 0 2px 0;
  }
  .loading-spinner {
    width: 8px;
    height: 8px;
    margin-bottom: 2px;
  }
  .loading-text {
    font-size: 9.5px;
  }
}
</style>

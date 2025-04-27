<template>
    <div class="project-detail-container" v-if="project">
      <div class="project-header">
        <h1 class="project-title">{{ project.title }}</h1>
        <div class="project-meta">
          <div class="meta-item techstack">
            <strong>Tech Stack:</strong> <span>{{ project.techstack }}</span>
          </div>
          <div class="meta-item date">
            <strong>Created:</strong> <span>{{ formattedDate(project.date) }}</span>
          </div>
        </div>
      </div>
  
      <div class="project-content">
        <p v-html="project.desc"></p>
      </div>
  
      <div class="project-footer">
        <div class="project-link" v-if="project.links">
          <a :href="project.links" target="_blank" class="read-more">Learn More</a>
        </div>
      </div>
    </div>
  
    <div class="loading" v-else>
      <p>Loading...</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        project: null, // Initialize project to null
      };
    },
    async created() {
      const projectSlug = this.$route.params.slug; // Get slug from route params
      try {
        const response = await fetch(`https://bofmysite.onrender.com/projects/${projectSlug}/`);
        if (response.ok) {
          this.project = await response.json(); // Save fetched project
        } else {
          console.error('Failed to fetch project details.');
        }
      } catch (error) {
        console.error('Error fetching project details:', error);
      }
    },
    methods: {
      formattedDate(date) {
        // Format date as MM-DD-YYYY
        const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
        return new Date(date).toLocaleDateString('en-US', options);
      },
    },
  };
  </script>
  
  <style scoped>
  /* Global layout */
  .project-detail-container {
    max-width: 900px;
    margin: 50px auto;
    padding: 20px;
    font-family: 'Source Code Pro', monospace;
    color: #333;
    transition: background-color 0.3s ease;
    background-color: var(--bg-color);
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
    color: var(--meta-text-color);
  }
  
  .meta-item {
    display: inline-flex;
    align-items: center;
    padding: 8px 16px;
    border: 1px dashed #ddd;
  }
  
  .meta-item strong {
    font-weight: 800;
    margin-right: 5px;
  }
  
  .project-content {
    font-size: 1.3rem;
    line-height: 1.8;
    margin-top: 20px;
    color: var(--content-color);
  }
  
  .project-footer {
    text-align: center;
  }
  
  .project-footer .project-link {
    margin-top: 20px;
  }
  
  .read-more {
    font-size: 1rem;
    text-decoration: none;
    color: var(--link-color);
    font-weight: 600;
    padding: 10px 20px;
    background-color: #fff;
    border: 1px dashed var(--link-color);
    display: inline-block;
    text-align: center;
    transition: background-color 0.3s ease, color 0.3s ease;
    border-radius: 0;
  }
  
  .read-more:hover {
    background-color: var(--link-color);
    color: #fff;
  }
  
  .loading {
    text-align: center;
    font-size: 1.2rem;
    color: #777;
    margin-top: 50px;
  }
  
  /* Dark/Light Mode */
  :root {
    --bg-color: #fff;
    --text-color: #333;
    --link-color: #007bff;
    --meta-text-color: #666;
    --content-color: #444;
  }
  
  @media (prefers-color-scheme: dark) {
    :root {
      --bg-color: #1e1e1e;
      --text-color: #fff;
      --link-color: #56ccf2;
      --meta-text-color: #bbb;
      --content-color: #ddd;
    }
  }
  
  /* Responsive Design */
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
  
<template>
    <div class="projects">
      <!-- Project Info Section -->
      <div class="project-info">
        <h1 class="info-title">Why I Build Projects 🚀</h1>
        <p class="info-text">
          These are some of my projects – a mix of fun experiments and solutions to real-world problems.  
          Each project reflects my learning journey, tackling challenges, and turning ideas into reality.
        </p>
      </div>
  
      <!-- Project List Section -->
      <table class="project-table">
        <tbody>
          <tr v-for="project in projects" :key="project.id" class="project-item">
            <td>
              <router-link :to="{ name: 'ProjectDetail', params: { id: project.id } }" class="project-link">
                {{ project.title }}
              </router-link>
            </td>
            <td>{{ new Date(project.created_at).toLocaleDateString() }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        projects: []
      };
    },
    created() {
      this.fetchProjects();
    },
    methods: {
      async fetchProjects() {
        try {
          const response = await fetch('https://bofmysite.onrender.com/api/projects/');
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          this.projects = data;
        } catch (error) {
          console.error('There has been a problem with your fetch operation:', error);
        }
      }
    }
  };
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@300;700&display=swap');
  
  /* Root Styling */
  .projects {
    text-align: center;
    padding: 80px 20px 20px;
  }
  
  /* Project Info Section */
  .project-info {
    max-width: 600px; /* Align with project list width */
    margin: 0 auto 30px auto;
    text-align: left;
  }
  
  .info-title {
    font-size: 1.2rem;
    font-family: 'Source Code Pro', monospace;
    font-weight: 700;
    margin-bottom: 10px;
    color: #63f861; /* Soft green */
  }
  
  .info-text {
    font-size: 1rem;
    font-family: 'Source Code Pro', monospace;
    line-height: 1.6;
    color: #b4b8ba; /* Neutral gray */
  }
  
  /* Project List Section */
  .project-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
    font-family: 'Source Code Pro', monospace;
  }
  
  .project-table th,
  .project-table td {
    padding: 0.6rem;
    text-align: left;
  }
  
  .project-link {
    color: #007bff;
    text-decoration: none;
  }
  
  .project-link:hover {
    text-decoration: underline;
    color: aqua;
  }
  
  .project-item:hover {
    cursor: pointer;
  }
  </style>
  
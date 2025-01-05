<template>
    <div class="projects">
      <h1>Projects</h1>
      <table class="project-table">
        <tbody>
          <tr v-for="project in projects" :key="project.id" class="project-item">
            <td>
              <router-link :to="{ name: 'ProjectDetail', params: { id: project.id } }" class="project-title">
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
        const response = await fetch('https://bofmysite.onrender.com/api/projects/');
        const data = await response.json();
        this.projects = data;
      }
    }
  };
  </script>
  
  <style scoped>
  .projects {
    text-align: center;
    padding: 20px;
  }
  
  .project-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
    font-family: 'Source Code Pro', monospace;
  }
  
  .project-table th,
  .project-table td {
    padding: 10px;
    border: 1px solid #ddd;
    text-align: left;
  }
  
  .project-title {
    color: #007bff;
    font-size: 1.2rem;
    text-decoration: none;
    font-family: 'Source Code Pro', monospace;
  }
  
  .project-title:hover {
    text-decoration: underline;
    color: aqua;
  }
  
  .project-item:hover {
    background-color: #f1f1f1;
    cursor: pointer;
  }
  
  .created-at {
    color: #888;
    font-size: 0.9rem;
  }
  </style>
  
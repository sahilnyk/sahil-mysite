<template>
    <div class="blogs">
      <!-- Blog Info Section -->
      <div class="blog-info">
        <h1 class="info-title">
          Why I Write Blogs 📝
        </h1>
        <p class="info-text">
          The main motive behind writing blogs is to maintain a journal of my tasks and learnings. 
          All the blogs are based on my opinions and experiences, and I hope they provide value to others.
        </p>
        <img src="@/assets/guruji.png" alt="Blogging Motivation" class="info-image" />
      </div>
  
      <!-- Blog List Section -->
      <div class="blog-list-container">
        <table class="blog-table">
          <tbody>
            <tr v-for="blog in blogs" :key="blog.id" class="blog-item">
              <td>
                <router-link :to="{ name: 'BlogDetail', params: { id: blog.id } }" class="blog-title">
                  {{ blog.title }}
                </router-link>
              </td>
              <td>{{ new Date(blog.created_at).toLocaleDateString() }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        blogs: []
      };
    },
    created() {
      this.fetchBlogs();
    },
    methods: {
      async fetchBlogs() {
        try {
          const response = await fetch('https://bofmysite.onrender.com/api/blogs/');
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          this.blogs = data;
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
  .blogs {
    text-align: center;
    padding: 80px 20px 20px;
    color: var(--text-color);
  }
  
  /* Blog Info Section */
  .blog-info {
    max-width: 600px;
    margin: 0 auto 30px auto;
    text-align: left;
  }
  
  .info-title {
    font-size: 1.2rem;
    font-family: 'Source Code Pro', monospace;
    font-weight: 700;
    margin-bottom: 10px;
    color: #63f861; /* Soft coding green */
  }
  
  .info-text {
    font-size: 1rem;
    font-family: 'Source Code Pro', monospace;
    line-height: 1.6;
    color: #b4b8ba; /* Neutral gray */
  }
  
  /* Blog List Section */
  .blog-list-container {
    max-width: 800px;
    margin: 0 auto;
  }
  
  .blog-table {
    width: 100%;
    border-collapse: collapse;
  }
  
  .blog-table td {
    padding: 0.5rem;
    text-align: left;
  }
  
  .blog-title {
    color: #26e1ee; /* Light blue */
    font-size: 1rem;
    text-decoration: none;
    font-family: 'Source code pro', monospace;

  }
  
  .blog-title:hover {
    text-decoration: underline;
    color: #0984e3; /* Brighter blue on hover */
  }
  
  .blog-item:hover {
    cursor: pointer;
  }
  
  /* Custom Variables for Colors */
  :root {
    --text-color: #d4d4d4;
  }
  
  @media (max-width: 768px) {
    .blog-info {
      text-align: center;
    }
    .info-text {
      font-size: 0.9rem;
    }
  }

  .info-image {
  display: block;
  margin: 20px auto;
  max-width: 100%;
  height: auto;
  /* border-radius: 10px; Optional for rounded corners */
  box-shadow: 0 4px 6px rgba(47, 47, 47, 0.1); /* Subtle shadow for elegance */
}
  </style>
  
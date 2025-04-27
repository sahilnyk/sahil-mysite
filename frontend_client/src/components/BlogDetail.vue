<template>
    <div class="blog-detail-container" v-if="blog">
      <div class="blog-header">
        <h1 class="blog-title">{{ blog.title }}</h1>
        <div class="blog-meta">
          <div class="meta-item author">
            <strong>Author:</strong> <span>{{ blog.author }}</span>
          </div>
          <div class="meta-item category">
            <strong>Category:</strong>
            <span>{{ blog.category }}</span>
          </div>
          <div class="meta-item date">
            <strong>Published:</strong> <span>{{ formattedDate(blog.date) }}</span>
          </div>
        </div>
      </div>
  
      <div class="blog-content">
        <p v-html="blog.desc"></p>
      </div>
  
      <div class="blog-footer">
        <div class="blog-link" v-if="blog.links">
          <a :href="blog.links" target="_blank" class="read-more">Read More</a>
        </div>
  
        <div class="blog-image" v-if="blog.image">
          <img :src="blog.image" alt="Blog Image" class="blog-img"/>
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
        blog: null, // Initialize blog to null
      };
    },
    async created() {
      const blogSlug = this.$route.params.slug; // Get slug from route params
      try {
        const response = await fetch(`https://bofmysite.onrender.com/blogs/${blogSlug}/`);
        if (response.ok) {
          this.blog = await response.json(); // Save fetched blog
        } else {
          console.error('Failed to fetch blog details.');
        }
      } catch (error) {
        console.error('Error fetching blog details:', error);
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
  .blog-detail-container {
    max-width: 900px;
    margin: 50px auto;
    padding: 20px;
    font-family: 'Coder', monospace; /* Updated font */
    color: #333;
    transition: background-color 0.3s ease;
    background-color: var(--bg-color);
  }
  
  .blog-title {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 15px;
    color: var(--text-color);
  }
  
  .blog-meta {
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
    /* Removed border radius */
  }
  
  .meta-item strong {
    font-weight: 800;
    margin-right: 5px;
  }
  
  .blog-content {
    font-size: 1.3rem;
    line-height: 1.8;
    margin-top: 20px;
    color: var(--content-color);
  }
  
  .blog-footer {
    text-align: center;
  }
  
  .blog-footer .blog-link {
    margin-top: 20px;
  }
  
  .read-more {
    font-size: 1rem;
    text-decoration: none;
    color: var(--link-color);
    font-weight: 600;
    padding: 10px 20px;
    background-color: #fff; /* White background */
    border: 1px dashed var(--link-color); /* Dashed border */
    display: inline-block;
    text-align: center;
    transition: background-color 0.3s ease, color 0.3s ease;
    border-radius: 0; /* No border radius */
  }
  
  .read-more:hover {
    background-color: var(--link-color);
    color: #fff;
  }
  
  .blog-img {
    max-width: 100%;
    height: auto;
    margin-top: 30px;
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
    .blog-detail-container {
      padding: 15px;
    }
  
    .blog-title {
      font-size: 1.6rem;
    }
  
    .blog-meta {
      font-size: 1rem;
      flex-direction: column;
    }
  }
  </style>
  
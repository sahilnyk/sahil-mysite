<template>
    <div class="blog-detail-container" v-if="blog">
      <h1 class="blog-title">{{ blog.title }}</h1>
      <div class="blog-meta">
        <span class="meta-item author">
          <strong>Author:</strong>
          <span class="hover-effect">{{ blog.author }}</span>
        </span>
        <span class="meta-item category">
          <strong>Category:</strong>
          <span class="hover-effect">{{ blog.category }}</span>
        </span>
        <span class="meta-item date">
          <strong>Created At:</strong>
          <span class="hover-effect">{{ formattedDate(blog.created_at) }}</span>
        </span>
        <span class="meta-item date" v-if="blog.updated_at">
          <strong>Last Updated:</strong>
          <span class="hover-effect">{{ formattedDate(blog.updated_at) }}</span>
        </span>
      </div>
      <div class="blog-content">
        <p>{{ blog.content }}</p>
      </div>
      <div class="blog-link" v-if="blog.link">
        <a :href="blog.link" target="_blank">Read More</a>
      </div>
      <div class="blog-image" v-if="blog.image">
        <img :src="blog.image" alt="Blog Image" />
      </div>
    </div>
    <div class="loading" v-else>
      <p>Loading...</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      id: {
        type: Number,
        required: true,
      },
    },
    data() {
      return {
        blog: null,
      };
    },
    created() {
      this.fetchBlog();
    },
    methods: {
      async fetchBlog() {
        try {
          const response = await fetch(`https://bofmysite.onrender.com/api/blogs/${this.id}/`);
          if (!response.ok) {
            throw new Error('Failed to fetch blog details');
          }
          const data = await response.json();
          this.blog = data;
        } catch (error) {
          console.error('Error fetching blog details:', error);
        }
      },
      formattedDate(date) {
        return new Date(date).toLocaleDateString();
      },
    },
  };
  </script>
  
  <style scoped>
  .blog-detail-container {
    max-width: 800px;
    margin: 40px auto;
    font-family: 'Source Code Pro', monospace;
    color: var(--text-color);
    transition: color 0.3s, background-color 0.3s;
    padding-top: 80px;
  }
  
  .blog-title {
    font-size: 0.9rem;
    font-weight: bold;
    margin-bottom: 20px;
    color: var(--title-color);
  }
  
  .blog-meta {
    font-size: 0.8rem;
    margin-bottom: 20px;
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
  }
  
  .meta-item {
    padding: 5px 10px;
    background: var(--meta-bg-color, rgba(255, 255, 255, 0.1)); /* Default light blur */
    border-radius: 5px;
    backdrop-filter: blur(6px);
    -webkit-backdrop-filter: blur(6px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    color: var(--meta-primary-color);
    transition: background-color 0.3s, box-shadow 0.3s, color 0.3s;
  }
  
  .meta-item:hover {
    background: rgba(0, 255, 255, 0.2); /* Aqua hover effect */
    color: #00ffff;
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.2);
  }
  
  .author,
  .category {
    font-weight: bold;
  }
  
  .date {
    font-weight: normal;
    color: var(--meta-secondary-color);
  }
  
  .blog-content p {
    font-size: 0.9rem;
    color: var(--content-color);
    line-height: 1.6;
    margin-bottom: 20px;
  }
  
  .blog-link a {
    font-size: 0.85rem;
    text-decoration: none;
    color: var(--link-color);
    border-bottom: 1px solid transparent;
    transition: color 0.3s ease, border-bottom 0.3s ease;
  }
  
  .blog-link a:hover {
    color: #00ffff;
    border-bottom: 1px solid #00ffff;
  }
  
  .blog-image img {
    max-width: 100%;
    height: auto;
    margin-top: 20px;
    border-radius: 4px;
  }
  
  .loading {
    text-align: center;
    font-size: 1rem;
  }
  
  :root {
    --text-color: #333;
    --title-color: #222;
    --meta-primary-color: #555;
    --meta-secondary-color: #777;
    --content-color: #444;
    --link-color: #007bff;
  }
  
  [data-theme='dark'] {
    --text-color: #e0e0e0;
    --title-color: #ffffff;
    --meta-primary-color: #ccc;
    --meta-secondary-color: #aaa;
    --content-color: #e0e0e0;
    --link-color: #1e90ff;
    --meta-bg-color: rgba(0, 0, 0, 0.2); /* Dark blur effect */
  }
  
  [data-theme='light'] {
    --meta-primary-color: #444;
    --meta-secondary-color: #666;
    --meta-bg-color: rgba(99, 97, 97, 0.5); /* Light grey blur for light mode */
    --content-color: #333;
    --link-color: #007bff;
  }
  
  .blog-meta .meta-item {
    background: var(--meta-bg-color, rgba(255, 255, 255, 0.1)); /* Light blur fallback */
  }
  </style>
  
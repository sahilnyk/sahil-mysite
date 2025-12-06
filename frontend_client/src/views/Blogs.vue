<template>
  <div class="blogs">
    <!-- Blog Info Section -->
    <div class="blog-info">
      <div class="info-line">&gt; I write blogs to keep a personal journal of my work, experiments, and learning.</div>
      <div class="info-line">&gt; All blogs are based on my opinions and experience — hope they help someone too!</div>
      <div class="info-line">&gt; Using Render free hosting, so it might take a few seconds to start the server.</div>
      <div class="info-line">
        &gt; You can also find all my blogs on
        <a href="https://hashnode.com/@sahilnyk" target="_blank" class="hashnode-link">
          <i class="fab fa-hashnode"></i> Hashnode
        </a>.
      </div>
    </div>

    <!-- Loading Animation (optional, if you want to show while fetching blogs) -->
    <div v-if="isLoading" class="loading-section">
      <div class="loading-spinner"></div>
      <span class="loading-text">
        Loading blogs...
      </span>
    </div>

    <!-- Blog List Section -->
    <div v-else class="blog-list-container">
      <BlogList />
    </div>
  </div>
</template>

<script>
import BlogList from '@/components/BlogList.vue';

export default {
  components: {
    BlogList,
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
    }, 1200);
  },
};
</script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css');
@import url('https://fonts.googleapis.com/css2?family=Cascadia+Code:wght@400;700&display=swap');

.blogs {
  text-align: center;
  padding: 48px 12px 12px;
  color: var(--text-color);
  font-family: 'Cascadia Code', monospace;
}

.blog-info {
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

.hashnode-link {
  color: #2962ff;
  text-decoration: none;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  gap: 3px;
  font-size: 15px;
  font-family: 'Cascadia Code', monospace;
  transition: color 0.2s;
}

.hashnode-link i {
  margin-right: 1px;
}

.hashnode-link:hover {
  color: #0039cb;
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
  border: 2px solid #2962ff;
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
  color: #2962ff;
  letter-spacing: 0.01em;
  opacity: 0.85;
  font-family: 'Cascadia Code', monospace;
  font-weight: 400;
}

.blog-list-container {
  max-width: 800px;
  margin: 0 auto;
  animation: fadeInBlogs 0.7s cubic-bezier(.4,0,.2,1);
}

@keyframes fadeInBlogs {
  from { opacity: 0; transform: translateY(8px);}
  to { opacity: 1; transform: translateY(0);}
}

@media (max-width: 600px) {
  .blogs {
    padding: 18px 2vw 4px;
  }
  .blog-info {
    font-size: 12px;
    padding-left: 2px;
    padding-right: 2px;
    max-width: 98vw;
  }
  .info-line,
  .hashnode-link {
    font-size: 12px;
    gap: 2px;
    flex-wrap: wrap;
    word-break: break-word;
  }
  .info-line {
    margin-bottom: 5px;
  }
  .blog-list-container {
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

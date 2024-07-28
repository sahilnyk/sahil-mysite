<!-- <template>
    <div>
        <h2>{{ blog.title }}</h2>
        <p><strong>Created At:</strong> {{ blog.created_at }}</p>
        <p>{{ blog.content }}</p>
        <router-link to="/blogs">Back to Blogs</router-link>
    </div>
</template>

<script>
export default {
    data() {
        return {
            blog: {}
        };
    },
    created() {
        this.fetchBlog();
    },
    methods: {
        fetchBlog() {
            const blogId = this.$route.params.id;
            fetch(`http://your-backend-api-url/blogs/${blogId}`)
                .then(response => response.json())
                .then(data => {
                    this.blog = data;
                })
                .catch(error => {
                    console.error('Error fetching blog:', error);
                });
        }
    }
};
</script>
  

<style scoped>
h2 {
    color: #42b983;
}

p {
    line-height: 1.5;
}
</style> -->

<template>
    <div>
        <h1>{{ blog.title }}</h1>
        <p>{{ blog.content }}</p>
        <p><strong>Created At:</strong> {{ new Date(blog.created_at).toLocaleDateString() }}</p>
        <router-link to="/blogs">Back to Blogs</router-link>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            blog: {}
        };
    },
    async created() {
        const id = this.$route.params.id;
        try {
            const response = await fetch(`https://c296-2405-201-a014-5821-109a-299a-bc38-54b6.ngrok-free.app/api/blogs/${id}/`);
            if (response.ok) {
                this.blog = await response.json();
            } else {
                console.error('Failed to fetch blog details.');
            }
        } catch (error) {
            console.error('Error fetching blog details:', error);
        }
    }
};
</script>
  
<style scoped>
/* Add your styles here */
</style>
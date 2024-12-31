<template>
    <div v-if="blog">
        <h1>{{ blog.title }}</h1>
        <p>Created At: {{ formattedDate }}</p>
        <p>{{ blog.content }}</p>
        <a :href="blog.link" target="_blank">More Info</a>
        <div v-if="blog.image">
            <img :src="blog.image" alt="Blog Image" />
        </div>
    </div>
    <div v-else>
        <p>Loading...</p>
    </div>
</template>
  
<script>
export default {
    props: {
        id: {
            type: Number,
            required: true
        }
    },
    data() {
        return {
            blog: null
        };
    },
    computed: {
        formattedDate() {
            if (this.blog && this.blog.created_at) {
                return new Date(this.blog.created_at).toLocaleDateString();
            }
            return 'Date not available';
        }
    },
    created() {
        this.fetchBlog();
    },
    methods: {
        async fetchBlog() {
            try {
                const response = await fetch(`https://bofmysite.onrender.com/api/blogs/${this.id}/`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                this.blog = data;
            } catch (error) {
                console.error('There has been a problem with your fetch operation:', error);
            }
        }
    }
};
</script>
  
<style scoped>
/* Add styles as needed */
</style>
  
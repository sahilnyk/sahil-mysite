<!-- 

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
            const response = await fetch(`https://bofmysite.onrender.com/api/blogs/${id}/`);
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
</style>  -->
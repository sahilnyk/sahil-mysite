<!-- <template>
    <div>
        <h1>Blog Detail Page</h1>
        <BlogDetail :blog="blog" />
    </div>
</template>
  
<script>
import BlogDetail from '../components/BlogDetail.vue';

export default {
    components: { BlogDetail },
    data() {
        return {
            blog: { id: this.$route.params.id, title: 'Sample Blog', content: 'This is a sample blog content.' }
        };
    }
};
</script>
   -->



<!-- <template>
    <div>
        <h1>{{ blog.title }}</h1>
        <p>{{ blog.content }}</p>
        <p>Created at: {{ blog.created_at }}</p>
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
            fetch(`http://localhost:8000/blogs/${blogId}`)
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

</style>
   -->


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
                const response = await fetch(`https://c296-2405-201-a014-5821-109a-299a-bc38-54b6.ngrok-free.app/api/blogs/${this.id}/`);
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
  
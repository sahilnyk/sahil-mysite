<!-- <template>
    <div>
        <h1>Blogs Page</h1>
        <BlogList :blogs="blogs" />
    </div>
</template>
  
<script>
import BlogList from '../components/BlogList.vue';

export default {
    components: { BlogList },
    data() {
        return {
            blogs: [
                { id: 1, title: 'Blog 1' },
                { id: 2, title: 'Blog 2' }
            ]
        };
    }
};
</script>

<style scoped>
h1 {
    color: #42b983;
}
</style>
   -->


<template>
    <div>
        <h1 style="font-size: 1.2rem; font-family: 'Source Code Pro', monospace;">
            My Blogs:
            <span style="color: green;">
                Here are the latest blogs
            </span>
        </h1>

        <table>
            <thead>
                <tr>
                    <th>Latest blogs</th>
                    <th>Created At</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="blog in blogs" :key="blog.id">
                    <td>
                        <router-link :to="{ name: 'BlogDetail', params: { id: blog.id } }">
                            {{ blog.title }}
                        </router-link>
                    </td>
                    <td>{{ new Date(blog.created_at).toLocaleDateString() }}</td>
                </tr>
            </tbody>
        </table>
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
h1 {
    padding: 20px;
}

table {
    width: 100%;
    border-collapse: collapse;
}

th,
td {
    padding: 0.5rem;
    text-align: left;
    border-bottom: 1px solid #ddd;
}

a {
    color: #007bff;
    text-decoration: none;
}

a:hover {
    text-decoration: underline;
}
</style>
  
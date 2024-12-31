<template>
    <div>
        <h1 style="font-size: 1.2rem; font-family: 'Source Code Pro', monospace;">
            Discover My Latest Projects:
            <span style="color: green;">
                Here are the List
            </span>
        </h1>
        <table>
            <thead>
                <tr>
                    <th>Project Name</th>
                    <th>Created At</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="project in projects" :key="project.id">
                    <td>
                        <router-link :to="{ name: 'ProjectDetail', params: { id: project.id } }">
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
            try {
                const response = await fetch('https://bofmysite.onrender.com/api/projects/');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                this.projects = data;
            } catch (error) {
                console.error('There has been a problem with your fetch operation:', error);
            }
        }
    }
};
</script>
  
<style scoped>
h1 {
    padding-top: 15px;
}

table {
    width: 100%;
    border-collapse: collapse;
}

th,
td {
    padding: 0.6rem;
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
  
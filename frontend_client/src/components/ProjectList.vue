<template>
    <div>
        <h1>Projects</h1>
        <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Created At</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="project in projects" :key="project.id">
                    <td>{{ project.title }}</td>
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
            const response = await fetch('https://bofmysite.onrender.com/api/projects/');
            const data = await response.json();
            this.projects = data;
        }
    }
};
</script>
  
<style scoped>
.projects {
    padding: 20px;
}

.project-item {
    border-bottom: 1px solid #ddd;
    padding: 10px 0;
}
</style>
  
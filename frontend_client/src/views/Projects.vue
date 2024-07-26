<!-- <template>
    <div>
        <h1>Projects Page</h1>
        <ProjectList :projects="projects" />
    </div>
</template>
  
<script>
import ProjectList from '../components/ProjectList.vue';

export default {
    components: { ProjectList },
    data() {
        return {
            projects: [
                { id: 1, title: 'Project 1' },
                { id: 2, title: 'Project 2' }
            ]
        };
    }
};
</script>

<style scoped>
h1 {
    color: #42b983;
}
</style> -->


<!-- <template>
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
            const response = await fetch('http://localhost:8000/api/projects/');
            const data = await response.json();
            this.projects = data;
        }
    }
};
</script>
  
<style scoped>
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
   -->



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
                const response = await fetch('http://localhost:8000/api/projects/');
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
  
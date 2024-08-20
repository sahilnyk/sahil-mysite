<!-- <template>
    <div>
        <h1>Project Detail Page</h1>
        <ProjectDetail :project="project" />
    </div>
</template>
  
<script>
import ProjectDetail from '../components/ProjectDetail.vue';

export default {
    components: { ProjectDetail },
    data() {
        return {
            project: { id: this.$route.params.id, title: 'Sample Project', description: 'This is a sample project description.' }
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
    <div v-if="project">
        <h1>{{ project.title }}</h1>
        <p>Created At: {{ new Date(project.created_at).toLocaleDateString() }}</p>
        <p>{{ project.content }}</p> 
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
            project: null
        };
    },
    created() {
        this.fetchProject();
    },
    methods: {
        async fetchProject() {
            const response = await fetch(`http://localhost:8000/api/projects/${this.id}/`);
            const data = await response.json();
            this.project = data;
        }
    }
};
</script>
  
<style scoped>

</style> -->


<template>
    <div v-if="project">
        <h1>{{ project.title }}</h1>
        <p>Created At: {{ formattedDate }}</p>
        <p>{{ project.description }}</p>
        <a :href="project.link" target="_blank">More Info</a>
        <div v-if="project.image">
            <img :src="project.image" alt="Project Image" />
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
            project: null
        };
    },
    computed: {
        formattedDate() {
            if (this.project && this.project.created_at) {
                return new Date(this.project.created_at).toLocaleDateString();
            }
            return 'Date not available';
        }
    },
    created() {
        this.fetchProject();
    },
    methods: {
        async fetchProject() {
            try {
                const response = await fetch(`https://bofmysite.onrender.com/api/projects/${this.id}/`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                this.project = data;
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
  
  
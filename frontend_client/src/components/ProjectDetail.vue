<template>
    <div>
        <h1>{{ project.title }}</h1>
        <p>{{ project.description }}</p>
    </div>
</template>
  
<script>
import api from '../services/api';

export default {
    name: 'ProjectDetail',
    data() {
        return {
            project: {}
        };
    },
    created() {
        const projectId = this.$route.params.id;
        api.getProject(projectId).then(response => {
            this.project = response.data;
        });
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
</style>
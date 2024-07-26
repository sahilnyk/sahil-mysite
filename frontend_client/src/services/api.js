import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://127.0.0.1:8000/api',
    headers: {
        'Content-Type': 'application/json'
    }
});

export default {
    getBlogs() {
        return apiClient.get('/blogs/');
    },
    getBlog(id) {
        return apiClient.get(`/blogs/${id}/`);
    },
    getProjects() {
        return apiClient.get('/projects/');
    },
    getProject(id) {
        return apiClient.get(`/projects/${id}/`);
    }
};

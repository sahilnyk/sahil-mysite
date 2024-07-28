import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://c296-2405-201-a014-5821-109a-299a-bc38-54b6.ngrok-free.app/api',
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

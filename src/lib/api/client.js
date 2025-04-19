import axios from 'axios';

const api = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add response interceptor for error handling
api.interceptors.response.use(
  (response) => response.data,
  (error) => {
    const message = error.response?.data?.error || 'Une erreur est survenue';
    return Promise.reject(new Error(message));
  }
);

export const ContactAPI = {
  create: async (contactData) => {
    return api.post('/contact', contactData);
  },
  
  getAll: async () => {
    return api.get('/contact');
  },
  
  getById: async (id) => {
    return api.get(`/contact/${id}`);
  },
  
  updateStatus: async (id, status) => {
    return api.patch(`/contact/${id}`, { status });
  },
};

export default api; 
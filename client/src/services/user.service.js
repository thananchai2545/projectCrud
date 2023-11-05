import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:5000/';

class UserService {
    getAdmin() {
        return axios.get(API_URL + 'users');
    }

    getUserBoard() {
        return axios.get(API_URL + 'user', { headers: authHeader() });
    }

    getModeratorBoard() {
        return axios.get(API_URL + 'mod', { headers: authHeader() });
    }

    getAdminBoard() {
        return axios.get(API_URL + 'admin', { headers: authHeader() });
    }

    createAdmin(payload) {
        return axios.post(API_URL + 'user', {
            payload
        },{ headers: authHeader() });
    }
    delete(Admin) {
        return axios.delete(API_URL + 'user/' +  Admin.id    ,{ headers: authHeader() });
    }
}

export default new UserService();
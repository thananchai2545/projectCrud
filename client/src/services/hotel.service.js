import axios from 'axios';
import authHeader from './auth-header';
// import { hotel } from '../../../server/src/models';

const API_URL = 'http://localhost:5000/';

class HotelService {
    getAllHotel(seach="") {
        const data = axios.get(API_URL + 'hotels?seach=' + seach);
        return data;
    }


    createHotel(payload) {
        return axios.post(API_URL + 'createHotel', {
            payload
        }, { headers: authHeader() });
    }

    EditHotel() {
        return axios.post(API_URL + 'createHotel', {
            payload
        }, { headers: authHeader() })
    }

    show(hotelId) {
        return axios.get(API_URL + 'hotelId/' + hotelId, { headers: authHeader() });
    }

    delete(user) {
        return axios.delete(API_URL + 'hotel/' + user.id, { headers: authHeader() });
    }
}

export default new HotelService();
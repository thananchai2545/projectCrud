import HotelService from '../services/hotel.service';
import AdminService from '../services/user.service';


// Create a new store instance.
// const user = JSON.parse(localStorage.getItem('user'));
// const initialState = user
//     ? { status: { loggedIn: true }, user }
//     : { status: { loggedIn: false }, user: null };
export const user = {
    namespaced: true,
    state: {
        hotel: []
    },
    actions: {
        createHotel({ commit }, payload){
            HotelService.createHotel(payload).then(
                payload => {
                    commit('CreateSuccess', payload);
                    return Promise.resolve(payload);
                }
            );
        },
        createAdmin({ commit }, payload){
            AdminService.createAdmin(payload).then(
                payload => {
                    commit('CreateSuccess', payload);
                    return Promise.resolve(payload);
                }
            );
        }
    },
    mutations: {
        CreateSuccess(state, { payload }) {
            state.hotel.push(payload);
        },
    }
}
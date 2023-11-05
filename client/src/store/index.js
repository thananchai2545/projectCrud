import { createStore } from "vuex";
import { auth } from "./auth.module";
import { user } from "./store";

const store = createStore({
    modules: {
        auth,
        user
    },
});

export default store;
import csrfFetch from "./csrf";

const SET_CURRENT_USER = 'session/setCurrentUser';
const REMOVE_CURRENT_USER = 'session/removeCurrentUser';

const setCurrentUser = user => ({
    type: SET_CURRENT_USER,
    payload: user
});

// const removeCurrentUser = () => ({
//     type: REMOVE_CURRENT_USER
// })

// const storeCurrentUser = user => {
//     if (user) {
//         sessionStorage.setItem("currentUser", JSON.stringify(user));
//     } else {
//         sessionStorage.removeItem("currentUser");
//     }
// }

export const login = ({ credential, password }) => async dispatch => {
    const res = await csrfFetch("/api/session", {
        method: "POST",
        body: JSON.stringify({ credential, password })
    });

    const userData = await res.json();
    sessionStorage.setItem('currentUser', userData.user)
    dispatch(setCurrentUser(userData.user));
    return userData;
}

const initialState = { user: null };

const sessionReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_USER:
            return { ...state, user: action.payload };
        case REMOVE_CURRENT_USER:
            return { ...state, user: null };
        default: 
            return state;
    }
};

export default sessionReducer;
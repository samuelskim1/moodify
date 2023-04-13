import csrfFetch from "./csrf";

const GET_USER = 'GET_USER';

const getUser = (user) => ({
    type: GET_USER,
    user
})

export const fetchUser = (userId) => async (dispatch) => {
    const res = await csrfFetch(`/api/users/${userId}`);
    if (res.ok) {
        const user = await res.json();
        return dispatch(getUser(user));
    }
}

const userReducer = (state = {}, action) => {
    const nextState = { ...state }
    
    switch (action.type) {
        case GET_USER:
            return action.user.id = action.user;
        default:
            return nextState;
    };
};

export default userReducer;
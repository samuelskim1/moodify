import csrfFetch from "./csrf";

const SET_CURRENT_USER = 'session/setCurrentUser';
const REMOVE_CURRENT_USER = 'session/removeCurrentUser'

export const setCurrentUser = (user) => ({
    type: SET_CURRENT_USER,
    payload: user
})

export const removeCurrentUser = () => ({
    type: REMOVE_CURRENT_USER
})

export const storeCSRFToken = (res) => {
    const token = res.headers.get('X-CSRF-Token')
    if (token) sessionStorage.setItem('X-CSRF-Token', token);
}

const storeCurrentUser = (user) => {
    sessionStorage.setItem('currentUser', JSON.stringify(user));
    //code from example:
    // if (user) sessionStorage.setItem("currentUser", JSON.stringify(user));
    // else sessionStorage.removeItem("currentUser");
    //NOTE: mine still works
}

export const login = (user) => async (dispatch) => {
    const { credential, password } = user;
    //destructing the key value pairs of credential and password from user

    const response = await csrfFetch('/api/session', {
        method: 'POST',
        body: JSON.stringify({
            credential,
            password
        })
    });

    const data = await response.json();
    storeCurrentUser(data.user);
    dispatch(setCurrentUser(data.user));
    return response;

};

export const signup = (user) => async (dispatch) => {
    const { username, email, password } = user;
    const response = await csrfFetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({
            username,
            email,
            password,
            // birth_date,
            // gender
        })
    });
    const data = await response.json();
    storeCurrentUser(data.user);
    dispatch(setCurrentUser(data.user));
    return response;
};


export const restoreSession = () => async (dispatch) => {
    const response = await csrfFetch('/api/session');
    storeCSRFToken(response);
    const data = await response.json();
    storeCurrentUser(data.user);
    dispatch(setCurrentUser(data.user));
    return response;

}

const initialState = {
    user: JSON.parse(sessionStorage.getItem('currentUser'))
};

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
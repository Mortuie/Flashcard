export const LOGOUT = 'LOGOUT';
export const LOGIN = 'LOGIN';


export function login(token, username) {
    return {
        type: LOGIN,
        token,
        username,
    };
}

export function logout() {
    return {
        type: LOGOUT,
    };
}

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import config from 'config';
const authHelper_1 = require("../_helpers/authHelper");
exports.userService = {
    login,
    logout,
    getAll
};
function login(username, password, url) {
    const basicauth = 'Basic ' + window.btoa(username + ':' + password);
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': basicauth },
    };
    return fetch(url, requestOptions)
        .then(handleResponse)
        .then(user => {
        // login successful if there's a user in the response
        if (user) {
            // store user details and basic auth credentials in local storage 
            // to keep user logged in between page refreshes
            user.authdata = window.btoa(username + ':' + password);
            localStorage.setItem('user', JSON.stringify(user));
        }
        return user;
    });
}
function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}
function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: authHelper_1.authHeader()
    };
    return fetch(`/users`, requestOptions).then(handleResponse);
}
function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                location.reload(true);
            }
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        return data;
    });
}
//# sourceMappingURL=loginServices.js.map
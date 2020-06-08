"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function authHeader() {
    // return authorization header with basic auth credentials
    let user = JSON.parse(localStorage.getItem('user'));
    if (user && user.authdata) {
        return { 'Authorization': 'Basic ' + user.authdata };
    }
    else {
        return {};
    }
}
exports.authHeader = authHeader;
//# sourceMappingURL=authHelper.js.map
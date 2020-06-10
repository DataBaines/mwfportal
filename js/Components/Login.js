"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const loginServices_1 = require("../_services/loginServices");
const apiConf_1 = __importDefault(require("../_helpers/apiConf"));
function Login(props) {
    const [username, setUsername] = react_1.useState('');
    const [password, setPassword] = react_1.useState('');
    const [submitted, setSubmitted] = react_1.useState(false);
    const [loading, setLoading] = react_1.useState(false);
    const [error, setError] = react_1.useState('');
    react_1.useEffect(() => {
        loginServices_1.userService.logout();
    });
    function handleChange(e) {
        const { name, value } = e.target;
        switch (name) {
            case 'username':
                setUsername(value);
                break;
            case 'password':
                setPassword(value);
                break;
            default:
                break;
        }
    }
    function handleSubmit(e) {
        e.preventDefault();
        setSubmitted(true);
        // stop here if form is invalid
        if (!(username && password)) {
            alert('Username and password must both be entered.');
            return;
        }
        setLoading(true);
        loginServices_1.userService.login(username, password, apiConf_1.default.url + 'login')
            .then(user => {
            const { from } = props.location.state || { from: { pathname: "/" } };
            props.history.push(from);
        }, error => {
            setError(error);
        });
    }
    return (react_1.default.createElement("div", { className: "col-md-6 col-md-offset-3" },
        react_1.default.createElement("h2", null, "Login"),
        react_1.default.createElement("form", { name: "form", onSubmit: handleSubmit },
            react_1.default.createElement("div", { className: 'form-group' + (submitted && !username ? ' has-error' : '') },
                react_1.default.createElement("label", { htmlFor: "username" }, "Username"),
                react_1.default.createElement("input", { type: "text", className: "form-control", name: "username", value: username, onChange: handleChange }),
                submitted && !username &&
                    react_1.default.createElement("div", { className: "help-block" }, "Username is required")),
            react_1.default.createElement("div", { className: 'form-group' + (submitted && !password ? ' has-error' : '') },
                react_1.default.createElement("label", { htmlFor: "password" }, "Password"),
                react_1.default.createElement("input", { type: "password", className: "form-control", name: "password", value: password, onChange: handleChange }),
                submitted && !password &&
                    react_1.default.createElement("div", { className: "help-block" }, "Password is required")),
            react_1.default.createElement("div", { className: "form-group" },
                react_1.default.createElement("button", { className: "btn btn-primary", disabled: loading }, "Login"),
                loading &&
                    react_1.default.createElement("span", null, "LOADING...")
            // <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
            ),
            error &&
                react_1.default.createElement("div", { className: 'alert alert-danger' }, error))));
}
exports.default = Login;
//# sourceMappingURL=Login.js.map
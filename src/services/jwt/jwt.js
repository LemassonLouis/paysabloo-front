export function getJWTToken() {
    return process.env.REACT_APP_API_TOKEN;
}

export function getAuthHeader() {
    return "Bearer " + getJWTToken();
}
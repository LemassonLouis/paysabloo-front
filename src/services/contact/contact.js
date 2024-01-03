import axios from "axios"
import { getAuthHeader } from "../jwt/jwt";

export default function getContact() {
    return axios
        .get(process.env.REACT_APP_API_ADDR+ "/contact", {
            headers: {
                Authorization: getAuthHeader()
            }
        })
        .then(response => {
            console.log("getContact() response", response);
            return response.data.data;
        })
        .catch(error => console.log("getContact() error", error));
}
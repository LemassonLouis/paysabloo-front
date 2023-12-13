import axios from "axios"
import { getAuthHeader } from "../jwt/jwt";

export default function getDomains() {
    return axios
        .get(process.env.REACT_APP_API_ADDR+ "/domains", {
            headers: {
                Authorization: getAuthHeader()
            },
            params: {
                populate: {
                    activities: {
                        populate: "images"
                    }
                }
            }
        })
        .then(response => {
            console.log("getDomains() response", response);
            return response.data.data;
        })
        .catch(error => console.log("getDomains() error", error));
}
import axios from "axios"

export default function getDomains() {
    return axios
        .get(process.env.REACT_APP_API_ADDR+ "/domains", {
            headers: {
                Authorization: "bearer " + process.env.REACT_APP_API_TOKEN
            }
        })
        .then(response => {
            const domains = response.data.data.map(element => {
                const domain = element.attributes;
                domain.id = element.id;
                return domain;
            });
            return domains;
        })
        .catch(error => console.log("getDomains() error", error));
}
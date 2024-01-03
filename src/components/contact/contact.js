import { useEffect, useState } from "react";

import getContact from "../../services/contact/contact";

import "./contact.css";

function Contact() {
    const [contact, setContact] = useState([]);

    useEffect(() => {
      getContact().then(contact => setContact(contact));
    }, []);

    return (
        <div className="contact">
            <div className="informations">
                <p>{contact.firstname}</p>
                <p>{contact.lastname}</p>
                <p>{contact.email}</p>
                <p>{contact.phone}</p>
                <p>{contact.address}</p>
            </div>
            <form className="form">
                <label for="email">Votre adresse mail</label>
                <input type="email" id="email" />

                <label for="subject">Sujet</label>
                <input type="text" id="subject" />

                <label for="description">Description</label>
                <textarea id="description"></textarea>

                <label for="submit" hidden>Envoyer</label>
                <input type="button" value="Envoyer" />
            </form>
        </div>
    )
}

export default Contact;
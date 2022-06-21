// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css

import React from 'react';
import "./Contacts.css";

const Contact = ({data}) => {
    const { name, email, phone, photo } = data
    return (
        <div className="Contacts" >
            <div className="Contacts__avr">
                <img src={photo} alt={name} />
            </div>
            <div className="Contacts__info">
                <p className="Contacts__name">{name}</p>
                <p className="Contacts__phone">{phone}</p>
                <p className="Contacts__email">{email}</p>
            </div>
        </div>
    )
}

export default Contact;
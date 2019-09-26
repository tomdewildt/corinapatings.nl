import React from "react";
import axios from "axios";
import querystring from "querystring";

import { required, email, phone } from "../form/validations";
import { Types } from "../form/fields";
import Form from "../form/Form";

const fields = [
    {
        name: "name",
        label: "Naam",
        type: Types.Text,
        validations: [ required ],
    },
    {
        name: "email",
        label: "Email",
        type: Types.Email,
        validations: [ required, email ],
    },
    {
        name: "phone",
        label: "Telefoon",
        type: Types.Phone,
        validations: [ required, phone ],
    },
    {
        name: "message",
        label: "Bericht",
        type: Types.TextArea,
        validations: [ required ],
    },
];

const ContactForm = () => {
    const onSubmit = ( values ) => {
        axios.post( "/", querystring.stringify( { "form-name": "contact", ...values } ), {
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
        } )
            .then( ( res ) => console.log( res ) )
            .catch( ( error ) => console.log( error ) );
    };

    return (
        <Form
            name="contact"
            fields={ fields }
            onSubmit={ onSubmit }
        />
    );
};

export default ContactForm;

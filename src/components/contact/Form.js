import React from "react";

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
        name: "test",
        label: "Select (REMOVE)",
        type: Types.Select,
        options: [
            { value: 1, label: "Value 1" },
            { value: 2, label: "Value 2" },
            { value: 3, label: "Value 3" },
        ],
        validations: [ required ],
    },
    {
        name: "message",
        label: "Bericht",
        type: Types.TextArea,
        validations: [ required ],
    },
];

const ContactForm = () => (
    <Form
        fields={ fields }
        onSubmit={ () => {} }
        onChange={ () => {} }
    />
);

export default ContactForm;

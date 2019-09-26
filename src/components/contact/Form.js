import React, { useState } from "react";
import querystring from "querystring";
import axios from "axios";

import { required, email, phone } from "../form/validations";
import { Types } from "../form/fields";
import Margin from "../spacing/Margin";
import Alert from "../alert/Alert";
import Form from "../form/Form";

const SUCCESS = "success";
const NAME = "contact";
const ERROR = "error";

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
    const [ state, setState ] = useState( {} );

    const onSubmit = ( values ) => {
        setState( {} );
        axios.post( "/", querystring.stringify( { "form-name": NAME, ...values } ), {
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
        } )
            .then( () => setState( {
                status: SUCCESS,
                message: "Bericht verstuurd.",
            } ) )
            .catch( () => setState( {
                status: ERROR,
                message: "Er is een fout opgetreden tijdens het verstuuren van het bericht.",
            } ) );
    };

    return (
        <Margin bottom={ 3 }>
            { state.status === SUCCESS && <Alert.Success>{ state.message }</Alert.Success> }
            { state.status === ERROR && <Alert.Danger>{ state.message }</Alert.Danger> }
            <Form
                name={ NAME }
                fields={ fields }
                onSubmit={ onSubmit }
            />
        </Margin>
    );
};

export default ContactForm;

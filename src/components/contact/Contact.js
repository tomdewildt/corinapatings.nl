import React from "react";

import Heading from "../typography/Heading";
import ContactDetails from "./Details";
import Column from "../grid/Column";
import ContactForm from "./Form";
import Row from "../grid/Row";

const Contact = () => (
    <>
        <Row>
            <Column>
                <Heading.H2 center>Contact</Heading.H2>
            </Column>
        </Row>
        <Row>
            <Column xs={ 12 } sm={ 6 }>
                <ContactForm />
            </Column>
            <Column xs={ 12 } sm={ 6 }>
                <ContactDetails />
            </Column>
        </Row>
    </>
);

export default Contact;

import React from "react";

import metadata from "../../assets/metadata.json";
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
                <ContactDetails
                    name={ metadata.contact.name }
                    address={ metadata.contact.address }
                    postalCode={ metadata.contact.postalCode }
                    phone={ metadata.contact.phone }
                    email={ metadata.contact.email }
                    linkedin={ metadata.social.linkedin }
                    facebook={ metadata.social.facebook }
                />
            </Column>
        </Row>
    </>
);

export default Contact;

import React from "react";

import TextArea from "../form/fields/TextArea";
import Input from "../form/fields/Input";
import FormGroup from "../form/Group";
import FormLabel from "../form/Label";
import Button from "../button/Button";
import Form from "../form/Form";

const ContactForm = () => (
    <Form>
        <FormGroup>
            <FormLabel htmlFor="name">Naam</FormLabel>
            <Input type="text" id="name" name="name" />
        </FormGroup>
        <FormGroup>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input type="text" id="email" name="email" />
        </FormGroup>
        <FormGroup>
            <FormLabel htmlFor="phone">Telefoon</FormLabel>
            <Input type="text" id="phone" name="phone" />
        </FormGroup>
        <FormGroup>
            <FormLabel htmlFor="message">Bericht</FormLabel>
            <TextArea id="message" name="message" />
        </FormGroup>
        <FormGroup>
            <Button.Primary type="submit">Verstuur</Button.Primary>
        </FormGroup>
    </Form>
);

export default ContactForm;

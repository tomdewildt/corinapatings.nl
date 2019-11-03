import React from "react";
import { StaticQuery, graphql } from "gatsby";
import styled from "styled-components";

import Column from "../grid/Column";
import Image from "../image/Image";
import Row from "../grid/Row";

const ContactBanner = styled( Image )`
    margin-right: 0.5rem;

    &:last-of-type { margin-right: 0; }
`;

const query = graphql`
    query {
        opvoedopstellingen: file(name: { eq: "opvoedopstellingen" }) {
            childImageSharp {
                fixed(height: 60) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
        adiona: file(name: { eq: "adiona" }) {
            childImageSharp {
                fixed(height: 60) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
        sensikids: file(name: { eq: "sensikids" }) {
            childImageSharp {
                fixed(height: 60) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
    }
`;

const ContactBanners = () => (
    <StaticQuery
        query={ query }
        render={ ( data ) => (
            <Row>
                <Column>
                    <ContactBanner source={ data.opvoedopstellingen } />
                    <ContactBanner source={ data.adiona } />
                    <ContactBanner source={ data.sensikids } />
                </Column>
            </Row>
        ) }
    />
);

export default ContactBanners;

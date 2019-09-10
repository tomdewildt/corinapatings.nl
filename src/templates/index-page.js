import React from "react";
import { graphql } from "gatsby";

const IndexPage = () => (
    <div>
        Test
    </div>
);

export const query = graphql`
    query HomePageQuery {
        site {
            siteMetadata {
                siteTitle
            }
        }
    }
`;

export default IndexPage;

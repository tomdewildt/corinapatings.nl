/* eslint-disable react/no-array-index-key */
import React from "react";
import { graphql } from "gatsby";
import PropTypes from "prop-types";
import {
    Container,
    Headers,
    Jumbotron,
    Row,
    Column,
    Heading,
    MarkdownContent,
    CardContainer,
    Card,
    Footer,
} from "../components";

const ContentPage = ( { data: { markdownRemark: { frontmatter } } } ) => (
    <>
        <Headers />
        <Jumbotron
            offset={ frontmatter.intro.offset }
            image={ frontmatter.intro.image }
        />
        <Container>
            <Row>
                <Column xs={ 12 }>
                    <Heading.H2 center>{ frontmatter.content.title }</Heading.H2>
                </Column>
            </Row>
            <Row>
                <Column xs={ 12 } sm={ 6 }>
                    <MarkdownContent source={ frontmatter.content.left } />
                </Column>
                <Column xs={ 12 } sm={ 6 }>
                    <MarkdownContent source={ frontmatter.content.right } />
                </Column>
            </Row>
            <CardContainer>
                { frontmatter.cards.map( ( card, i ) => (
                    <Card
                        key={ i }
                        title={ card.title }
                        description={ card.description }
                        color={ card.color }
                        image={ card.image }
                        size={ card.size }
                    />
                ) )}
            </CardContainer>
        </Container>
        <Footer />
    </>
);

ContentPage.propTypes = {
    data: PropTypes.shape( {
        markdownRemark: PropTypes.shape( {
            frontmatter: PropTypes.shape( {
                intro: PropTypes.shape( {
                    offset: PropTypes.number,
                    image: PropTypes.oneOfType( [ PropTypes.shape( {} ), PropTypes.string ] ),
                } ),
                content: PropTypes.shape( {
                    title: PropTypes.string,
                    left: PropTypes.string,
                    right: PropTypes.string,
                } ),
                cards: PropTypes.arrayOf( PropTypes.shape( {
                    title: PropTypes.string,
                    description: PropTypes.string,
                    link: PropTypes.string,
                    color: PropTypes.string,
                    image: PropTypes.oneOfType( [ PropTypes.shape( {} ), PropTypes.string ] ),
                    size: PropTypes.string,
                } ) ),
            } ).isRequired,
        } ).isRequired,
    } ).isRequired,
};

export const query = graphql`
    query ContentPageQuery($id: String!) {
        markdownRemark(id: { eq: $id }) {
            frontmatter {
                intro {
                    offset
                    image {
                        childImageSharp {
                            fluid(maxWidth: 1920) {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                }
                content {
                    title
                    left
                    right
                }
                cards {
                    title
                    description
                    color
                    image {
                        childImageSharp {
                            fluid(maxWidth: 630) {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                    size
                }
            }
        }
    }
`;

export default ContentPage;

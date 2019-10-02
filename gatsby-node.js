const path = require( "path" );
const { createFilePath } = require( "gatsby-source-filesystem" );
const { fmImagesToRelative } = require( "gatsby-remark-relative-images" );

exports.createPages = async ( { actions, graphql } ) => {
    const { createPage } = actions;

    const result = await graphql( `
        {
            allMarkdownRemark(limit: 1000) {
                nodes {
                    fields {
                        slug
                    }
                    frontmatter {
                        templateKey
                    }
                }
            }
        }
    ` );
    if ( result.errors ) return;

    const pages = result.data.allMarkdownRemark.nodes;
    pages.forEach( ( page ) => {
        createPage( {
            path: page.fields.slug,
            component: path.resolve(
                `src/templates/${ String( page.frontmatter.templateKey ) }.js`,
            ),
            context: {},
        } );
    } );
};

exports.onCreateNode = ( { node, actions, getNode } ) => {
    const { createNodeField } = actions;
    fmImagesToRelative( node );

    if ( node.internal.type === "MarkdownRemark" ) {
        const value = createFilePath( { node, getNode } );
        createNodeField( {
            name: "slug",
            node,
            value,
        } );
    }
};
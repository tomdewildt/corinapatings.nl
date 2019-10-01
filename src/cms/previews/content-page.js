import React from "react";
import PropTypes from "prop-types";

import ContentPage from "../../templates/content-page";
import withLayout from "../hooks/withLayout";

const ContentPagePreview = ( { entry } ) => {
    const data = entry.getIn( [ "data" ] ).toJS();

    if ( data ) {
        return <ContentPage data={ { markdownRemark: { frontmatter: data } } } />;
    }
    return <div>Loading...</div>;
};

ContentPagePreview.propTypes = {
    entry: PropTypes.shape( {
        getIn: PropTypes.func,
    } ).isRequired,
};

export default withLayout( ContentPagePreview );

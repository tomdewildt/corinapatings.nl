import React from "react";
import PropTypes from "prop-types";

import IndexPage from "../../templates/index-page";
import withLayout from "../hooks/withLayout";

const IndexPagePreview = ( { entry } ) => {
    const data = entry.getIn( [ "data" ] ).toJS();

    if ( data ) {
        return <IndexPage data={ { markdownRemark: { frontmatter: data } } } />;
    }
    return <div>Loading...</div>;
};

IndexPagePreview.propTypes = {
    entry: PropTypes.shape( {
        getIn: PropTypes.func,
    } ).isRequired,
};

export default withLayout( IndexPagePreview );

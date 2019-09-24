import React from "react";
import PropTypes from "prop-types";

const GoogleMap = ( {
    place,
    className,
} ) => (
    <iframe
        title="Map"
        frameBorder="0"
        className={ className }
        src={ `https://www.google.com/maps/embed/v1/place?q=place_id:${ place }&key=${ process.env.GATSBY_GOOGLE_API_KEY }` }
        allowFullScreen
    />
);

GoogleMap.propTypes = {
    place: PropTypes.string.isRequired,
    className: PropTypes.string,
};

GoogleMap.defaultProps = {
    className: "",
};

export default GoogleMap;

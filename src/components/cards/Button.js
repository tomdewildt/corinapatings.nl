import React from "react";
import PropTypes from "prop-types";

import Link from "../button/Link";

const CardButton = ( { to, color, children } ) => {
    switch ( color ) {
        case "primary":
            return <Link.Secondary to={ to }>{ children }</Link.Secondary>;
        case "secondary":
            return <Link.Primary to={ to }>{ children }</Link.Primary>;
        case "tertiary":
            return <Link.Tertiary to={ to }>{ children }</Link.Tertiary>;
        default:
            return children;
    }
};

CardButton.propTypes = {
    children: PropTypes.node.isRequired,
    color: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
};

export default CardButton;

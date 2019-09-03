import React from "react";
import PropTypes from "prop-types";

import Button from "./Button";
import Lines from "./Lines";
import Box from "./Box";

const Burger = ( { isActive, breakpoint, toggle } ) => (
    <Button type="button" aria-label="Menu" breakpoint={ breakpoint } onClick={ toggle }>
        <Box>
            <Lines isActive={ isActive } />
        </Box>
    </Button>
);

Burger.propTypes = {
    isActive: PropTypes.bool.isRequired,
    breakpoint: PropTypes.string,
    toggle: PropTypes.func.isRequired,
};

Burger.defaultProps = {
    breakpoint: null,
};

export default Burger;

import React from "react";
import PropTypes from "prop-types";

import BurgerButton from "./Button";
import BurgerLines from "./Lines";
import BurgerBox from "./Box";

const Burger = ( { isActive, breakpoint, toggle } ) => (
    <BurgerButton type="button" aria-label="Menu" breakpoint={ breakpoint } onClick={ toggle }>
        <BurgerBox>
            <BurgerLines isActive={ isActive } />
        </BurgerBox>
    </BurgerButton>
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

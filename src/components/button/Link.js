import styled from "styled-components";
import { Link } from "gatsby";

import Base from "./Base";

const Primary = styled( Link )`
    ${ Base }
    
    background-color: ${ ( { theme } ) => theme.color.primary };
    border: ${ ( { theme } ) => `1px solid ${ theme.color.primaryDark }` };

    &:hover {
        background-color: ${ ( { theme } ) => theme.color.primaryDark };
        border: ${ ( { theme } ) => `1px solid ${ theme.color.primaryDarkest }` };
    }
    &:focus {
        outline: none;
        box-shadow: ${ ( { theme } ) => `0 0 0 0.2rem ${ theme.color.primaryDarkest }50` };
    }
`;

const Secondary = styled( Link )`
    ${ Base }

    background-color: ${ ( { theme } ) => theme.color.secondary };
    border: ${ ( { theme } ) => `1px solid ${ theme.color.secondaryDark }` };

    &:hover {
        background-color: ${ ( { theme } ) => theme.color.secondaryDark };
        border: ${ ( { theme } ) => `1px solid ${ theme.color.secondaryDarkest }` };
    }
    &:focus {
        outline: none;
        box-shadow: ${ ( { theme } ) => `0 0 0 0.2rem ${ theme.color.secondaryDarkest }50` };
    }
`;

const Tertiary = styled( Link )`
    ${ Base }

    background-color: ${ ( { theme } ) => theme.color.tertiaryDark };
    border: ${ ( { theme } ) => `1px solid ${ theme.color.tertiaryDarkest }` };

    &:hover {
        background-color: ${ ( { theme } ) => theme.color.tertiaryDarkest };
        border: ${ ( { theme } ) => `1px solid ${ theme.color.tertiaryDarkest }` };
    }
    &:focus {
        outline: none;
        box-shadow: ${ ( { theme } ) => `0 0 0 0.2rem ${ theme.color.tertiaryDarkest }50` };
    }
`;

export default {
    Primary,
    Secondary,
    Tertiary,
};

import styled from "styled-components";

const Button = styled.button`
    display: inline-block;
    margin: ${ ( { theme } ) => `0 ${ theme.button.margin }rem 0 0` };
    padding: ${ ( { theme } ) => `${ theme.button.padding }rem ${ theme.button.padding * 2.5 }rem` };
    border-radius: ${ ( { theme } ) => theme.button.radius }rem;
    font: inherit;
    font-weight: 700;
    font-size: ${ ( { theme } ) => theme.button.size }rem;
    text-transform: none;
    color: ${ ( { theme } ) => theme.color.white };
    cursor: pointer;
    overflow: visible;

    &:last-of-type {
        margin-right: 0;
    }
`;

const Primary = styled( Button )`
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

const Secondary = styled( Button )`
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

const Tertiary = styled( Button )`
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

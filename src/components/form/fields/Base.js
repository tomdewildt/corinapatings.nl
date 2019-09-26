import { css } from "styled-components";

const Base = css`
    display: block;
    width: 100%;
    padding: .375rem .75rem;
    font-size: 1rem;
    font-family: inherit;
    line-height: 1.5;
    box-sizing : border-box;
    color: ${ ( { theme } ) => theme.color.grayDarkest };
    background-color: ${ ( { theme } ) => theme.color.white };
    border: ${ ( { theme } ) => `1px solid ${ theme.color.gray }` };
    border-radius: ${ ( { theme } ) => theme.input.radius }rem;

    &::placeholder {
        color: ${ ( { theme } ) => theme.color.grayDark };
    }
    
    &:focus {
        outline: 0;
        box-shadow: ${ ( { theme } ) => `0 0 0 0.2rem ${ theme.color.primaryDarkest }50` };
        border-color: ${ ( { theme } ) => theme.color.primaryDarkest };
    }

    ${ ( { error, theme } ) => error && css`
        border: 1px solid ${ theme.color.danger };

        &:focus {
            outline: 0;
            box-shadow: 0 0 0 0.2rem ${ theme.color.danger }50;
            border-color: ${ theme.color.danger };
        }
    ` }
`;

export default Base;

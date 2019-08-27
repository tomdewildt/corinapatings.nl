import styled from "styled-components";

const Select = styled.select`
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
    
    &:focus {
        outline: 0;
        box-shadow: ${ ( { theme } ) => `0 0 0 0.2rem ${ theme.color.primaryDarkest }50` };
        border-color: ${ ( { theme } ) => theme.color.primaryDarkest };
    }
`;

export default Select;

import styled from "styled-components";

const TextArea = styled.textarea`
    display: block;
    width: 100%;
    min-height: 2.5rem;
    padding: .375rem .75rem;
    resize: vertical;
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
`;

export default TextArea;

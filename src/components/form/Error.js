import styled from "styled-components";

const FormError = styled.div`
    width: 100%;
    margin-top: .25rem;
    font-size: 80%;
    color: ${ ( { theme } ) => theme.color.danger };
`;

export default FormError;

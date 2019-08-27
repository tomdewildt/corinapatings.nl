import styled from "styled-components";

const FormLabel = styled.label`
    display: inline-block;
    margin-bottom: ${ ( { theme } ) => theme.form.margin / 2 }rem;
    font-weight: 700;
    color: ${ ( { theme } ) => theme.color.grayDarkest };
`;

export default FormLabel;

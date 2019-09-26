import styled from "styled-components";

const Alert = styled.div`
    width: 100%;
    margin-bottom: 1rem;
    padding: ${ ( { theme } ) => theme.alert.padding }rem;
    border-radius: ${ ( { theme } ) => theme.alert.radius }rem;
    color: ${ ( { theme } ) => theme.color.white };
`;

const Success = styled( Alert )`
    background-color: ${ ( { theme } ) => theme.color.success };
`;

const Danger = styled( Alert )`
    background-color: ${ ( { theme } ) => theme.color.danger };
`;

export default {
    Success,
    Danger,
};

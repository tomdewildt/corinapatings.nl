import styled from "styled-components";

const H1 = styled.h1`
    font-family: ${ ( { theme } ) => theme.typography.h1.font };
    font-size: ${ ( { theme } ) => theme.typography.h1.size }rem;
    font-weight: 700;
    line-height: ${ ( { theme } ) => theme.typography.h1.lineHeight };
    margin-bottom: ${ ( { theme } ) => theme.typography.h1.marginBottom }rem;
`;

const H2 = styled.h2`
    font-family: ${ ( { theme } ) => theme.typography.h2.font };
    font-size: ${ ( { theme } ) => theme.typography.h2.size }rem;
    font-weight: 700;
    line-height: ${ ( { theme } ) => theme.typography.h2.lineHeight };
    margin-bottom: ${ ( { theme } ) => theme.typography.h2.marginBottom }rem;
`;

const H3 = styled.h3`
    font-family: ${ ( { theme } ) => theme.typography.h3.font };
    font-size: ${ ( { theme } ) => theme.typography.h3.size }rem;
    font-weight: 700;
    line-height: ${ ( { theme } ) => theme.typography.h3.lineHeight };
    margin-bottom: ${ ( { theme } ) => theme.typography.h3.marginBottom }rem;
`;

const H4 = styled.h4`
    font-family: ${ ( { theme } ) => theme.typography.h4.font };
    font-size: ${ ( { theme } ) => theme.typography.h4.size }rem;
    font-weight: 700;
    line-height: ${ ( { theme } ) => theme.typography.h4.lineHeight };
    margin-bottom: ${ ( { theme } ) => theme.typography.h4.marginBottom }rem;
`;

const H5 = styled.h5`
    font-family: ${ ( { theme } ) => theme.typography.h5.font };
    font-size: ${ ( { theme } ) => theme.typography.h5.size }rem;
    font-weight: 700;
    line-height: ${ ( { theme } ) => theme.typography.h5.lineHeight };
    margin-bottom: ${ ( { theme } ) => theme.typography.h5.marginBottom }rem;
`;

const H6 = styled.h6`
    font-family: ${ ( { theme } ) => theme.typography.h6.font };
    font-size: ${ ( { theme } ) => theme.typography.h6.size }rem;
    font-weight: 700;
    line-height: ${ ( { theme } ) => theme.typography.h6.lineHeight };
    margin-bottom: ${ ( { theme } ) => theme.typography.h6.marginBottom }rem;
`;

export default {
    H1,
    H2,
    H3,
    H4,
    H5,
    H6,
};

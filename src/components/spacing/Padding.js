import styled from "styled-components";

const Padding = styled.div`
    ${ ( props ) => props.theme.padding.types.map( ( t ) => props[ t ]
        && `padding-${ t }: ${ props.theme.padding.values[ props[ t ] ] }rem;` ) }
`;

export default Padding;

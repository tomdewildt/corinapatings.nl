import styled from "styled-components";

const BurgerBox = styled.div`
    position: relative;
    display: block;
    width: ${ ( { theme } ) => theme.burger.line.width }rem;
    height: ${ ( { theme } ) => theme.burger.line.height * 3 + theme.burger.line.spacing * 2 }rem;
`;

export default BurgerBox;

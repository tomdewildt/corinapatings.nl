import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: LuloCleanOne;
        src: url("/assets/fonts/LuloCleanOne-Bold.otf") format('opentype');
        font-weight: 700;
        font-style: normal;
    }

    @font-face {
        font-family: Quicksand;
        src: url("/assets/fonts/Quicksand-Regular.ttf") format('truetype');
        font-weight: 400;
        font-style: normal;
    }

    @font-face {
        font-family: Quicksand;
        src: url("/assets/fonts/Quicksand-Bold.ttf") format('truetype');
        font-weight: 700;
        font-style: normal;
    }

    ${ reset }

    html, body {
        font-family: ${ ( { theme } ) => theme.typography.font };
        font-size: ${ ( { theme } ) => theme.typography.size }rem;
        line-height: ${ ( { theme } ) => theme.typography.lineHeight };
        color: ${ ( { theme } ) => theme.color.black };
    }
`;

export default GlobalStyle;

import jumbotron from "./jumbotron";
import general from "./general";
import content from "./content";
import spacing from "./spacing";
import navbar from "./navbar";
import footer from "./footer";
import button from "./button";
import alert from "./alert";
import cards from "./cards";
import form from "./form";
import grid from "./grid";

export default {
    ...jumbotron,
    ...general,
    ...content,
    ...spacing,
    ...navbar,
    ...footer,
    ...button,
    ...alert,
    ...cards,
    ...form,
    ...grid,
};
export { default as GlobalStyle } from "./global";

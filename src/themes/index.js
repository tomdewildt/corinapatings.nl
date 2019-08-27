import general from "./general";
import spacing from "./spacing";
import navbar from "./navbar";
import button from "./button";
import form from "./form";
import grid from "./grid";

export default {
    ...general,
    ...spacing,
    ...navbar,
    ...button,
    ...form,
    ...grid,
};
export { default as GlobalStyle } from "./global";

import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}
    body {
    background-color: #f2ceff;
    }
`;

export default GlobalStyle;

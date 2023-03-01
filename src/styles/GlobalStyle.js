import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    background-color: ${(props) => props.theme.primary.primaryBg};
    color: ${(props) => props.theme.primary.displayHeaderTextColor};
    font-family: 'League Spartan', sans-serif;
}
`;

export default GlobalStyle;

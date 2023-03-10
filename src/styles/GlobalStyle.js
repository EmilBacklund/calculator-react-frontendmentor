import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
}

body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    background-color: ${(props) => props.theme[props.currentTheme].primaryBg};
    color: ${(props) => props.theme[props.currentTheme].displayHeaderTextColor};
    font-family: 'League Spartan', sans-serif;
    user-select: none;
    outline: none;
}
`;

export default GlobalStyle;

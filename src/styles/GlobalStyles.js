
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
}

body {
    -webkit-font-smoothing: antialiased;
    background-color: #eeeeee;
}

body, input, button {
    font: 18px Poppins, sans-serif;
}

#root {
    max-width: 1060px;
    margin: 0 auto;
    padding: 40px 20px;
}
`;
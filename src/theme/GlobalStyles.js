import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*, *::before, *::after {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  padding: 0;
  font-family: 'Open Sans', sans-serif;
}
html {
  font-size: 62.5%; 
}

body{
  overflow-x: hidden;
  font-size: 1.6rem;
}

.swal-footer {
  text-align: center;
}

`;

export default GlobalStyle;

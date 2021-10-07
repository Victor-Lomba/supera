import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root{
  --bright-red: #F22B29;
  --dark-red: #D72638;
  --orange: #F49D37;
  --green: #4FEE8C;
}

*{
  font-family: "Poppins", sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body{
  width: 100%;
  min-height: 100vh;
}
`;

import React from 'react';
import { Global, css } from '@emotion/core';

function GlobalStyles() {
  return (
    <Global
      styles={css`
        body {
          margin: 0;
          height: 100vh;
          font-family: 'Roboto', sans-serif, regular;
          font-size: 16px;
          color: #323338;

          ::placeholder {
            color: #9eaebc;
          }
        }
      `}
    />
  );
}
export default GlobalStyles;

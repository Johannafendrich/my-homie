import React from 'react';
import { Global, css } from '@emotion/core';
import Background from '../assets/background.svg';

function GlobalStyles() {
  return (
    <Global
      styles={css`
        *,
        *:before,
        *:after {
          box-sizing: border-box;
          @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@700&family=Roboto:wght@400;500&display=swap');
        }
          body {
            margin: 0px;
            height: 100vh;
            font-family: 'Roboto', sans-serif, regular;
            font-size: 16px;
            color: #323338;
            display: flex;
            justify-content: center;
            background-image: url(${Background});
            background-repeat: no-repeat;
            background-size: cover;        

          }
        }
      `}
    />
  );
}
export default GlobalStyles;

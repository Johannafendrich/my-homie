import React from 'react';
import styled from '@emotion/styled';

const SVG = styled.svg`
  width: 70px;
  height: 65px;
`;

const SmallLogo = () => {
  return (
    <SVG xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="a" x="10" y="19" filterUnits="userSpaceOnUse">
          <feOffset dy="3" input="SourceAlpha" />
          <feGaussianBlur stdDeviation="5" result="b" />
          <feFlood floodOpacity="0.161" />
          <feComposite operator="in" in2="b" />
          <feComposite in="SourceGraphic" />
        </filter>
      </defs>
      <g transform="translate(-758 -1570)">
        <g transform="translate(3 4)">
          <path
            d="M17.544,37.4h0a28.144,28.144,0,0,1-5.649-.649,21.6,21.6,0,0,1-8.327-3.283A8.256,8.256,0,0,1,.212,28.66C-.385,26.1.281,23,2.19,19.445a48.218,48.218,0,0,1,6.9-9.326A100.27,100.27,0,0,1,19.932,0l.008.014A98.242,98.242,0,0,1,25.4,12.964a50.424,50.424,0,0,1,2.521,10.969c.373,3.952-.117,7.082-1.457,9.306C24.8,36,21.8,37.4,17.544,37.4ZM14.878,19.968a3.984,3.984,0,1,0,3.984,3.984A3.989,3.989,0,0,0,14.878,19.968Z"
            transform="translate(814.251 1626.997) rotate(-150)"
            fill="#f2b705"
          />
          <g transform="matrix(1, 0, 0, 1, 759.79, 1556.79)" filter="url(#a)">
            <path
              d="M19.815,37.217h0A100.063,100.063,0,0,1,9.039,27.177a47.809,47.809,0,0,1-6.861-9.26C.28,14.387-.382,11.3.21,8.754A8.251,8.251,0,0,1,3.569,3.942,21.693,21.693,0,0,1,11.921.652,28.248,28.248,0,0,1,17.591,0c4.249,0,7.239,1.394,8.887,4.143,1.327,2.213,1.8,5.328,1.413,9.26a50.209,50.209,0,0,1-2.563,10.914,98.3,98.3,0,0,1-5.513,12.9ZM14.907,9.467a3.984,3.984,0,1,0,3.984,3.984A3.989,3.989,0,0,0,14.907,9.467Z"
              transform="translate(17.38 23.02)"
              fill="#f2b705"
            />
          </g>
          <circle
            cx="4.123"
            cy="4.123"
            r="4.123"
            transform="matrix(0.974, 0.225, -0.225, 0.974, 788.925, 1588.23)"
            fill="#fbe9b4"
          />
        </g>
        <circle
          cx="4.123"
          cy="4.123"
          r="4.123"
          transform="translate(817.801 1608.257) rotate(-150)"
          fill="#fbe9b4"
        />
      </g>
    </SVG>
  );
};
export default SmallLogo;

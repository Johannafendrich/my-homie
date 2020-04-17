import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const SVG = styled.svg`
  &:active {
    transform: translateY(2px) scale(1.2);
  }
  fill: ${(props) => (props.active ? '#F2D22E' : '#707070')};
`;

export const Homie = ({ active }) => {
  return (
    <SVG
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="30"
      viewBox="0 0 29 30"
      active={active}
    >
      <path
        d="M137.373,968.02c.007-.122.02-.245.02-.367.006-1.81.008-3.62.017-5.431a2.3,2.3,0,0,1,1.626-2.314,3.039,3.039,0,0,1,3.154.611.845.845,0,0,1,.086.135c1.684-1.273,2.842-1.27,4.448-.023,1.358-1.058,1.978-1.141,3.884-.5,0-.138,0-.262,0-.386,0-1.767,0-3.535.008-5.3a2.6,2.6,0,0,1,2.411-2.521,2.66,2.66,0,0,1,2.97,2.005,7.48,7.48,0,0,1,.065,1.409c.014,3.149.054,6.3.023,9.448A39.307,39.307,0,0,1,155,973.994a10.035,10.035,0,0,1-2.15,4.368c-.651.734-1.23,1.525-1.826,2.3a.794.794,0,0,1-.692.339q-5.357-.007-10.714,0c-.485,0-.651-.14-.666-.589a5.633,5.633,0,0,0-1.654-3.75c-2.653-2.837-5.282-5.693-7.919-8.543a2.487,2.487,0,0,1,.2-3.556,2.956,2.956,0,0,1,3.879.019C134.64,965.643,137.174,967.972,137.373,968.02Z"
        transform="translate(-128.721 -951.911)"
      />
    </SVG>
  );
};

export const Discover = ({ active }) => {
  return (
    <SVG
      xmlns="http://www.w3.org/2000/svg"
      width="110"
      height="150"
      viewBox="-3 10 100 100"
      active={active}
    >
      <defs>
        <filter
          id="a"
          x="8"
          y="17"
          width="46"
          height="55"
          filterUnits="userSpaceOnUse"
        >
          <feOffset dy="3" input="SourceAlpha" />
          <feGaussianBlur stdDeviation="5" result="b" />
          <feFlood floodOpacity="0.161" />
          <feComposite operator="in" in2="b" />
          <feComposite in="SourceGraphic" />
        </filter>
      </defs>
      <g transform="translate(-758 -1570)">
        <circle cx="41" cy="41" r="41" transform="translate(763 1562)" />
        <g transform="translate(777.429 1565.364) rotate(9)">
          <path
            d="M36.17,0A36.17,36.17,0,1,1,0,36.17,36.17,36.17,0,0,1,36.17,0Z"
            transform="translate(-4 -4)"
            fill="#8645ff"
          />
        </g>
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
        <ellipse
          cx="3.984"
          cy="3.984"
          rx="3.984"
          ry="3.984"
          transform="translate(817.801 1608.257) rotate(-150)"
          fill="#fbe9b4"
        />
      </g>
    </SVG>
  );
};

export const Profile = ({ active }) => {
  return (
    <SVG
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="30"
      viewBox="0 0 21 30"
      active={active}
    >
      <g transform="translate(-321 -1339)">
        <path
          d="M19.719,8.859A5.859,5.859,0,1,1,13.859,3,5.859,5.859,0,0,1,19.719,8.859Z"
          transform="translate(317.395 1336)"
        />
        <path
          d="M15.254,14A10.254,10.254,0,0,0,5,24.254H25.508A10.254,10.254,0,0,0,15.254,14Z"
          transform="translate(316 1341.113)"
        />
      </g>
    </SVG>
  );
};

Homie.propTypes = {
  active: PropTypes.bool,
};

Discover.propTypes = {
  active: PropTypes.bool,
};

Profile.propTypes = {
  active: PropTypes.bool,
};

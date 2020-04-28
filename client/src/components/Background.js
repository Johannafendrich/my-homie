import styled from '@emotion/styled';
import StartBackground from '../assets/background.svg';

const Background = styled.div`
  display: flex;
  position: fixed;
  bottom: 10rem;
  z-index: -1;
  margin: 0;
  width: 100vw;
  height: 30vh;
  align-content: flex-end;
  background-image: url(${StartBackground});
  background-repeat: no-repeat;
  background-size: cover;
`;
export default Background;

import styled from '@emotion/styled';

const Button = styled.button`
  background-color: #8645ff;
  color: white;
  padding: 0.7rem;
  border: none;
  border-radius: 20px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 16%);
  text-transform: uppercase;
  font: bold 0.8rem 'Oswald', sans-serif;
  outline: none;
  cursor: pointer;

  &:active {
    transform: translateY(1px) scale(0.9);
    box-shadow: 0px 5px 10px rgba(134, 69, 255, 60%);
  }
`;

export default Button;

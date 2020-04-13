import styled from '@emotion/styled';

const Button = styled.button`
  background-color: #8645ff;
  color: white;
  padding: 12px;
  border: none;
  border-radius: 20px;
  box-shadow: 0px 10px 15px rgba(0, 0, 0, 16%);
  text-transform: uppercase;
  font-size: 14px;
  font-family: Oswald, sans-serif;
  font-weight: bold;
  cursor: pointer;

  &:active {
    transform: translateY(5px) scale(1.1);
    box-shadow: 0px 10px 15px rgba(134, 69, 255, 60%);
  }
`;
export default Button;

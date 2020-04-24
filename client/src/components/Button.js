import styled from '@emotion/styled';

const Button = styled.button`
  background-color: #8645ff;
  align-self: flex-end;
  color: white;
  padding: 12px;
  margin-top: 50px;
  margin-bottom: 10px;
  border: none;
  border-radius: 1.5rem;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 16%);
  text-transform: uppercase;
  font: bold 0.8rem 'Oswald', sans-serif;
  outline: none;
  cursor: pointer;

  &:active {
    transform: translateY(2px) scale(0.9);
    box-shadow: 0px 5px 10px rgba(135, 70, 255, 60%);
  }
`;

export default Button;

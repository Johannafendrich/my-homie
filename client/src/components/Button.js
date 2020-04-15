import styled from '@emotion/styled';

export const Button = styled.button`
  background-color: #8645ff;
  color: white;
  padding: 12px;
  margin-top: 10rem;
  border: none;
  border-radius: 20px;
  box-shadow: 0px 10px 15px rgba(0, 0, 0, 16%);
  text-transform: uppercase;
  font-size: 0.875rem;
  font-family: Oswald, sans-serif;
  font-weight: bold;
  cursor: pointer;
  align-items: flex-end;

  &:active {
    transform: translateY(5px) scale(1.1);
    box-shadow: 0px 10px 15px rgba(134, 69, 255, 60%);
  }
`;

export const ButtonSize = styled.div`
  display: flex;
  justify-content: center;
  > * {
    flex-basis: 50%;
  }
`;

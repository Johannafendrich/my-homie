import styled from '@emotion/styled';

export const Tag = styled.li`
  background: #f2d22e;
  display: flex;
  color: white;
  border: none;
  font-family: 'Roboto';
  font-size: 1rem;
  text-align: center;
  justify-content: center;
  list-style: none;
  padding: 4px;
  margin-left: 10px;
  border-radius: 10px;
`;
export const AboutTag = styled(Tag)`
  background-color: #f2ac29;
`;
export const HobbiesTag = styled(Tag)`
  background-color: #f2d22e;
`;
export const ActivitiesTag = styled(Tag)`
  background-color: #8645ff;
`;

export default Tag;

import styled from '@emotion/styled';

const Title = styled.h1`
  font: 1.5rem 'Anton', sans-serif;
  color: #323338;
  line-height: 0.5;
  padding-top: 1.5rem;
`;

export const TitleWhite = styled.h1`
  font: 1.7rem 'Anton', sans-serif;
  color: white;
  line-height: 1;
  text-align: left;
  margin-left: 1.5rem;
  margin-bottom: 0;
`;

export const MainTitle = styled.h1`
  font: 1.8rem 'Anton', sans-serif;
  text-align: center;
  margin-top: 1.2rem;
  color: white;
  padding: 0;
  margin-bottom: 0;
`;

export const AboutTitle = styled(Title)`
  color: #f2ac29;
`;
export const HobbiesTitle = styled(Title)`
  color: #f2d22e;
`;
export const ActivitiesTitle = styled(Title)`
  color: #8645ff;
`;
export default Title;

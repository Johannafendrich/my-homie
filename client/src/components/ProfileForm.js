import React from 'react';
import styled from '@emotion/styled';
import { useMutation } from 'react-query';
import addUser from '../api/homies';
import InputField from '../components/Input';
import EmailIcon from '../assets/email.svg';
import AgeIcon from '../assets/age.svg';
import UserGroupIcon from '../assets/user-group.svg';
import PhoneIcon from '../assets/phone.svg';
import HobbyIcon from '../assets/heart.svg';
import ActivitiyIcon from '../assets/sun.svg';
import LanguageIcon from '../assets/language.svg';
import BasicCard from '../components/BasicCard';
import Container from '../components/Container';
import Button from '../components/Button';
import Form from '../components/Form';
import Textarea from '../components/Textarea';
import Dropdown from '../components/Dropdown';
import MultiSelectInput from '../components/MultiSelectInput';
import Title from '../components/Title';

const AboutTitle = styled(Title)`
  color: #f2ac29;
`;
const HobbiesTitle = styled(Title)`
  color: #f2d22e;
`;
const ActivitiesTitle = styled(Title)`
  color: #8645ff;
`;

function ProfileForm() {
  const [about, setAbout] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [age, setAge] = React.useState('');
  const [language, setLanguage] = React.useState([]);
  const [hobbies, setHobbies] = React.useState([]);
  const [activities, setActivities] = React.useState([]);
  const [dropdownValue, setdropdownValue] = React.useState('');
  const [createNewUser, { error }] = useMutation(addUser);

  async function handleDropdown(event) {
    setdropdownValue(event.target.value);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    await createNewUser({
      about,
      age,
      email,
      phone,
      language,
      hobbies,
      activities,
    });
  }

  return (
    <BasicCard>
      <Form onSubmit={handleSubmit}>
        {error && <span>{error.message}</span>}

        <AboutTitle>About</AboutTitle>
        <Textarea
          placeholder="Write something about you – what should other Homies know about you?"
          value={about}
          onChange={(event) => {
            setAbout(event.target.value);
          }}
        />

        <MultiSelectInput
          value={language}
          onChange={setLanguage}
          src={LanguageIcon}
          placeholder={'What languages do you speak?'}
        />
        <InputField
          type="text"
          placeholder="Date of birth mm/dd/yyyy"
          src={AgeIcon}
          value={age}
          onChange={(event) => {
            setAge(event.target.value);
          }}
        />
        <Dropdown
          src={UserGroupIcon}
          value={dropdownValue}
          placeholder="Gender"
          onChange={handleDropdown}
          data={[
            {
              value: 1,
              label: 'Female',
            },
            {
              value: 2,
              label: 'Male',
            },
            {
              value: 3,
              label: 'Other',
            },
          ]}
        />

        <HobbiesTitle>Hobbies</HobbiesTitle>
        <MultiSelectInput
          value={hobbies}
          onChange={setHobbies}
          src={HobbyIcon}
          placeholder={'What are your hobbies?'}
        />

        <ActivitiesTitle>Activities</ActivitiesTitle>
        <MultiSelectInput
          value={activities}
          onChange={setActivities}
          src={ActivitiyIcon}
          placeholder={'What activities do you like?'}
        />

        <Title className="contact">Contact</Title>
        <InputField
          type="text"
          placeholder="Phone"
          src={PhoneIcon}
          value={phone}
          onChange={(event) => {
            setPhone(event.target.value);
          }}
        />
        <InputField
          type="email"
          placeholder="E-mail"
          src={EmailIcon}
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />

        <Container>
          <Button onClick={handleSubmit}>Submit</Button>
        </Container>
      </Form>
    </BasicCard>
  );
}
export default ProfileForm;

import React from 'react';
import { useHistory } from 'react-router-dom';
import { useMutation } from 'react-query';
import { addUser } from '../api/users';
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
import { AboutTitle, HobbiesTitle, ActivitiesTitle } from '../components/Title';

function ProfileForm() {
  const history = useHistory();
  const [about, setAbout] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [age, setAge] = React.useState('');
  const [gender, setGender] = React.useState('');
  const [createNewUser, { error }] = useMutation(addUser);
  const [language, setLanguage] = React.useState([]);
  const [hobbies, setHobbies] = React.useState([]);
  const [activities, setActivities] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  const handleDropdown = (event) => {
    setGender(event.target.value);
  };

  async function handleSubmit(event) {
    setIsLoading(true);
    event.preventDefault();
    history.push(`/profile`);
    await createNewUser({
      about,
      language,
      age,
      gender,
      hobbies,
      activities,
      phone,
      email,
    });
  }

  if (isLoading) {
    return <div>Loading...</div>;
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
          src={LanguageIcon}
          placeholder={'Press enter to add your languages'}
          onChange={setLanguage}
        />
        <InputField
          type="number"
          placeholder="Date of birth"
          src={AgeIcon}
          value={age}
          onChange={(event) => {
            setAge(event.target.value);
          }}
        />

        <Dropdown
          src={UserGroupIcon}
          placeholder="Gender"
          value={gender}
          onChange={handleDropdown}
          data={[
            {
              value: 'Female',
              label: 'Female',
            },
            {
              value: 'Male',
              label: 'Male',
            },
            {
              value: 'Other',
              label: 'Other',
            },
          ]}
        />

        <HobbiesTitle>Hobbies</HobbiesTitle>
        <MultiSelectInput
          value={hobbies}
          src={HobbyIcon}
          onChange={setHobbies}
          placeholder={'Press enter to add your hobbies'}
        />
        <ActivitiesTitle>Activities</ActivitiesTitle>
        <MultiSelectInput
          value={activities}
          src={ActivitiyIcon}
          placeholder={'Press enter to add activities'}
          onChange={setActivities}
        />
        <Title className="contact">Contact</Title>
        <InputField
          type="tel"
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
          <Button disabled={isLoading}>Submit</Button>
        </Container>
      </Form>
    </BasicCard>
  );
}
export default ProfileForm;

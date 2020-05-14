import React from 'react';
import Header from '../components/Header';
import ProfileForm from '../components/ProfileForm';
import BottomNav from '../utils/Navigation';
import ProfileSection from '../components/ProfileSection';

const CreateAccount = () => {
  return (
    <>
      <ProfileSection />
      <Header />
      <ProfileForm />
      <BottomNav />
    </>
  );
};
export default CreateAccount;

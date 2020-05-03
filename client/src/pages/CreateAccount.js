import React from 'react';
import Header from '../components/Header';
import ProfileForm from '../components/ProfileForm';
import ProfileSection from '../components/ProfileSection';
import BottomNav from '../utils/Navigation';

function AddAccount() {
  return (
    <>
      <Header />
      <ProfileSection />
      <ProfileForm />
      <BottomNav />
    </>
  );
}
export default AddAccount;

// import React from 'react';
// import { useQuerry } from 'react-query';

export async function getUser(userId) {
  const response = await fetch(`('/api/users')/${userId}`);
  const user = await response.json();
  return user;
}

export async function addUser(user) {
  const response = await fetch('/api/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });
  if (!response.ok) {
    throw new Error('Invalid request');
  }
  const addedUser = await response.json();
  return addedUser;
}

// async function fetchUser() {
//   const response = await fetch('api/users');
//   const homies = response.json();
//   return homies;
// }

// export async function getUser() {
//   const { status, data: userdata, error } = useQuerry('user', fetchUser);

//   if (status === 'loading') {
//     return <span>Loading...</span>;
//   }

//   if (status === 'error') {
//     return <span>Error: {error.message}</span>;
//   }

//   return (
//     <div>
//       {userdata.map((homies) => (
//         <div key={homies.id}>{homies.name}</div>
//       ))}
//     </div>
//   );
// }

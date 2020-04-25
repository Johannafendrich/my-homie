async function addUser(user) {
  const response = await fetch('api/homies', {
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
export default addUser;

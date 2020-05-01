export async function addUser(user) {
  const response = await fetch('/api/user', {
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

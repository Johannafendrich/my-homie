export async function getUsers() {
  const response = await fetch('/api/users');
  const users = await response.json();
  return users;
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

export async function getLatestUser() {
  const response = await fetch('api/users?_sort=id&_order=desc');
  const users = await response.json();
  return users[0];
}

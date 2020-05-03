export async function getHobbies(userId) {
  const response = await fetch(`('/api/hobbies')/${userId}`);
  const hobby = await response.json();
  return hobby;
}

export async function addHobbies(hobbies) {
  const response = await fetch('/api/hobbies', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(hobbies),
  });
  if (!response.ok) {
    throw new Error('Invalid request');
  }
  const addedHobbies = await response.json();
  return addedHobbies;
}

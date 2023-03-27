export async function getAllUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");

  return response.json();
}

export async function getUserById(id) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );

  return response.json();
}

export async function getUserCategory({ userId, category }) {
  console.log(userId);
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}/${category}`
  );

  return response.json();
}

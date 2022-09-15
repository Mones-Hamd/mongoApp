import { fetchData } from '../utilit/fetchData.js';

export const registerUser = () => {
  const submitUser = document.querySelector('.submit-user');

  if (!submitUser) return;
  const values = document.querySelectorAll('.form-control');

  const url = `http://localhost:3000/api/register`;
  submitUser.addEventListener('click', async (e) => {
    e.preventDefault();

    const requestOptions = {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        user_name: values[0]?.value,
        user_last_name: values[1]?.value,
        user_email: values[2]?.value,
        user_password: values[3]?.value,
      }),
    };
    const insertedData = await fetchData(url, requestOptions);
    console.log(insertedData);
  });
};

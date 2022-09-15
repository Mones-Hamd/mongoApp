import { fetchData } from '../utilit/fetchData.js';
export const creatUserLogin = () => {
  const loginUserEl = document.querySelector('.login-btn');
  if (!loginUserEl) return;
  const values = document.querySelectorAll('.form-control');
  console.log(values);

  const url = `http://localhost:3000/api/login`;
  loginUserEl.addEventListener('click', async (e) => {
    e.preventDefault();

    const requestOptions = {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        user_email: values[0]?.value,
        user_password: values[1]?.value,
      }),
    };
    console.log(requestOptions);
    const sendLoginData = await fetchData(url, requestOptions);
    console.log(sendLoginData.token);
    window.localStorage.setItem('token', JSON.stringify(sendLoginData.token));
    window.location = `http://localhost:3000/home`;
  });
  return;
};

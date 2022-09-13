import { fetchData } from '../utilit/fetchData.js';

export const postVolunteer = () => {
  const submitBtn = document.querySelector('#submit-btn');
  if (!submitBtn) return;
  const values = document.querySelectorAll('.input-field');

  const url = `http://localhost:3000/api/volunteer`;
  submitBtn.addEventListener('click', async (e) => {
    e.preventDefault();

    const requestOptions = {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: values[0]?.value,
        post: values[1]?.value,
        email: values[2]?.value,
        job: values[3]?.value,
        available: values[4]?.value,
        place: values[5]?.value,
      }),
    };
    const insertedData = await fetchData(url, requestOptions);
    console.log(insertedData);
    location.reload();
  });
  return;
};

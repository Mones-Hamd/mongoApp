import { fetchData } from '../utilit/fetchData.js';

export const postVolunteer = () => {
  const submitBtn = document.querySelector('#submit-btn');
  const values = document.querySelectorAll('input');

  const url = `http://localhost:3000/api/volunteer`;
  submitBtn.addEventListener('click', async (e) => {
    e.preventDefault();

    const requestOptions = {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: values[1]?.value,
        place: values[2]?.value,
        job: values[3]?.value,
        work: values[4]?.value,
        good: values[5]?.value,
        available: values[6]?.value,
        details: values[7]?.value,
      }),
    };
    const insertedData = await fetchData(url, requestOptions);
    console.log(insertedData);
    values[0].value = insertedData._id;
    location.reload();
  });
  return;
};

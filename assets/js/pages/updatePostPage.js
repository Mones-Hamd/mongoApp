import { fetchData } from '../utilit/fetchData.js';

export const updatePost = async () => {
  const updateBtn = document.querySelector('.update-btn');
  const inputValues = document.querySelectorAll('input');
  const url = `http://localhost:3000/api/volunteer/${inputValues[0].value}`;
  updateBtn.addEventListener('click', async (e) => {
    e.preventDefault();
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-type': 'application/json; charset=utf-8' },
      body: JSON.stringify({
        name: inputValues[1].value
          ? inputValues[1].value
          : inputValues[1].placeholder,
        place: inputValues[2].value
          ? inputValues[2].value
          : inputValues[2].placeholder,
        job: inputValues[3].value
          ? inputValues[3].value
          : inputValues[3].placeholder,
        work: inputValues[4].value
          ? inputValues[4].value
          : inputValues[4].placeholder,
        good: inputValues[5].value
          ? inputValues[5].value
          : inputValues[5].placeholder,
        available: inputValues[6].value
          ? inputValues[6].value
          : inputValues[6].placeholder,
        details: inputValues[7].value
          ? inputValues[7].value
          : inputValues[7].placeholder,
      }),
    };
    try {
      const updatedData = await fetchData(url, requestOptions);
      location.reload();
    } catch (err) {
      throw err;
    }
  });
};

import { fetchData } from '../utilit/fetchData.js';
import { createPostsElement } from '../views/homeView.js';

export const initVolunteerPost = async () => {
  let url = `http://localhost:3000/api/volunteer`;
  const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  };
  try {
    const data = await fetchData(url, requestOptions);
    const renderDtat = data.forEach((element) => {
      createPostsElement(element);
    });
  } catch (err) {
    throw err;
  }
};

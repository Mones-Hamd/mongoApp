import { sendComment, initCommentElement } from '../services/comment.js';
import { likes } from '../services/likes.js';
import { fetchData } from '../utilit/fetchData.js';
import { createMinPostsElement } from '../views/homeView.js';
import fetch from 'fetch-defaults';

export const initVolunteerPost = async () => {
  const token = window.localStorage.getItem('token');
  const s = await JSON.parse(token);
  console.log(s);
  let url = `http://localhost:3000/api/volunteer`;
  const requestOptions = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${window.localStorage.getItem('token')}`,
      Accept: 'application/json',
      'Content-Type': 'multipart/form-data',
    },
  };
  console.log(requestOptions);
  try {
    // const apiFetch = await fetchDefaults(fetch, url, {
    //   headers: {
    //     Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiTW9uZXMiLCJpYXQiOjE2NjMyMDE2MzYsImV4cCI6MTY2MzIwNTIzNn0.Kl--a7UNSDqd1WKRWjbC6Ru7ear5kiu4Anbr8muBjpQ `,
    //   },
    // });
    const data = await fetchData(url, requestOptions);

    const renderData = data.forEach((obj) => {
      createMinPostsElement(obj);
    });
    initFullPost();
    likes();
    sendComment();
    initCommentElement();
  } catch (err) {
    throw err;
  }
};
const initFullPost = () => {
  const hiddenEl = document.querySelectorAll('.post-volunteer-card');

  hiddenEl.forEach((element) => {
    element.addEventListener('click', (e) => {
      const current = e.target;
      const showMoreEl = current.className.includes('show-more');

      if (!showMoreEl) return;
      const currentData = e.target.parentNode.querySelector('.hidden');

      currentData.classList.toggle('show-data');
      current.textContent = current.textContent.includes('SHOW MORE')
        ? 'SHOW LESS'
        : 'SHOW MORE';
    });
  });
};

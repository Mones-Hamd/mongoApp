import { sendComment, initCommentElement } from '../services/comment.js';
import { likes } from '../services/likes.js';
import { fetchData } from '../utilit/fetchData.js';
import { createMinPostsElement } from '../views/homeView.js';

export const initVolunteerPost = async () => {
  let url = `http://localhost:3000/api/volunteer`;
  const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  };
  try {
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
  //  const showMoreEl = document.querySelectorAll('.show-more');
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

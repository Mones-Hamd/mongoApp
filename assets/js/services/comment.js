import { fetchData } from '../utilit/fetchData.js';

export const initCommentElement = () => {
  const hiddenEl = document.querySelectorAll('.post-volunteer-card');

  hiddenEl.forEach((element) => {
    element.addEventListener('click', (e) => {
      const current = e.target;

      const showCommentEl = current.className.includes('comment-icon');

      if (!showCommentEl) return;
      const currentData = e.target.parentNode.querySelector('.hidden-comment');

      currentData.classList.toggle('show-comment');
      //
    });
  });
};

export const sendComment = () => {
  const commentsEl = document.querySelectorAll('.submit-comment-btn');

  commentsEl.forEach(async (comment) => {
    comment.addEventListener('click', async () => {
      const commentId = comment.id;
      const commentValue = document.querySelector('.comment-field').value;

      const url = `/api/volunteer/${commentId}`;

      const requestOptions = {
        method: 'put',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({ comment_body: commentValue }),
      };

      await fetchData(url, requestOptions);
      location.reload();
    });
  });
};

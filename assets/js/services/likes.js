import { fetchData } from '../utilit/fetchData.js';

export const likes = () => {
  const likesEl = document.querySelectorAll('.like');
  likesEl.forEach((like) => {
    like.addEventListener('click', async () => {
      const likeId = like.id;
      const url = `/api/volunteer/${likeId}`;
      const requestOptions = {
        method: 'PUT',
        headers: { 'Content-type': 'application/json; charset=utf-8' },
        body: JSON.stringify({ likes: 1 }),
      };
      const data = await fetchData(url, requestOptions);
      console.log('data like ', data);
      const numberOflikes = document.getElementById(`like_uniqu_${likeId}`);

      const value = parseInt(numberOflikes.textContent);
      numberOflikes.innerHTML = value + 1;

      //location.reload();
    });
  });
};

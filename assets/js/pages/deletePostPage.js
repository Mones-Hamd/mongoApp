import { fetchData } from '../utilit/fetchData.js';

export const deletePost = () => {
  const deleteBtns = document.querySelectorAll('.delete-btn');
  if (!deleteBtns) return;
  deleteBtns.forEach((deleteBtn) => {
    deleteBtn.addEventListener('click', async (e) => {
      e.preventDefault();
      const url = `/api/volunteer/${deleteBtn.id}`;
      const requestOptions = {
        method: 'DELETE',
        headers: { 'Content-type': 'application/json; charset=utf-8' },
      };
      const deletedData = await fetchData(url, requestOptions);
      location.reload();
    });
  });
};

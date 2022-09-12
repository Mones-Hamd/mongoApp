import { POST_VOLUNTEER_CARD } from '../constant.js';

export const createPostsElement = (data) => {
  const volunteerPostEl = document.querySelector(`.volunteer-posts`);
  if (!volunteerPostEl) return;
  const divEl = document.createElement('div');
  volunteerPostEl.appendChild(divEl);
  divEl.classList.add(`${POST_VOLUNTEER_CARD}`);
  divEl.innerHTML = String.raw`<div>
  <h1> ${data.name}</h1>
  <time>${data.date}</time>
  <div>
  <p>${data.details ? data.details : 'No description available right now! '}</p>
</div>
  <h3>${data.place}</h3>
</div>
<div>
  <h3>${data.job}</h3>
  <h3>${data.work}</h3>
</div>
<div>
  <h4>${data.good}</h4>
  <h4>${data.available}</h4>
</div>

  <div >
  <a href="volunteer/${data._id}" id=${
    data._id
  }  class="show-more"> SHOW MORE</a>
  </div>
  <div >
  <a href="update/${data._id}" id=${data._id}  class="update"> UPDATE</a>
  </div>
  <div>
  <a  href="volunteer/" id=${data._id} class="delete-btn"> DELETE</a>
  </div>
  
  `;
  return volunteerPostEl;
};

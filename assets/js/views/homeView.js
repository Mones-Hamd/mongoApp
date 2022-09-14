import { POST_VOLUNTEER_CARD } from '../constant.js';

export const createMinPostsElement = (data) => {
  const volunteerPostEl = document.querySelector(`.volunteer-posts`);
  if (!volunteerPostEl) return;
  const divEl = document.createElement('div');
  volunteerPostEl.appendChild(divEl);
  divEl.classList.add(`${POST_VOLUNTEER_CARD}`);
  if (!data.comments[0]) {
    data.comments[0] = { comment_body: 'there is no comments yet' };
  }
  const lastCommentIndx = data.comments.length - 1;
  const beforeLastCommentIndx = data.comments.length - 2;

  divEl.innerHTML = String.raw`<div>
  <h1> ${data.name}</h1>
  <time>${data.date}</time>
  <div>
  <p>${data.post}</p>
</div class="email">
  <h3>${data.email}</h3>
</div>
<div>

<div class="hidden">
  <div class="job-post ">
    <h3>${data.job}</h3>
  </div>
  <div class="available-post">
    <h3>${data.available}</h3>
  </div>
  <div class="place-post">
    <h3>${data.place}</h3>
  </div>
</div>
 <p class="show-more"> SHOW MORE</p><br>

<div >
  <a href="update/${data._id}" id=${data._id}  class="update"> UPDATE</a>
</div>
<div>
  <a  href="volunteer/" id=${data._id} class="delete-btn"> DELETE</a>
</div>
<div class="icons">
  <div  >
<i class="fa-solid fa-thumbs-up like" id="${data._id}"></i>
<p class="number-of-likes" id="like_uniqu_${data._id}">${
    data.likes ? data.likes++ : '0'
  }</p>
</div> <br>
<div class="comment-sec">
<i class="fa-solid fa-comment comment-icon"></i>
  <div class="hidden-comment">
    <form id="${data._id}">
    <label for="comments" class="input-lable">  ${
      data.comments[lastCommentIndx].comment_body
    }  </label><br>
      <label for="comments" class="input-lable">  ${
        data.comments[beforeLastCommentIndx]
          ? data.comments[beforeLastCommentIndx].comment_body
          : 'hit your comment'
      }  </label>
  <textarea type="text" name ='comment' value="" placeholder="leave a comment " class="comment-field" required > </textarea>
  <span class="submit-comment-btn" id="${data._id}">Send</span>
  </form>
  </div>

</div>
</div>

  `;
  return volunteerPostEl;
};

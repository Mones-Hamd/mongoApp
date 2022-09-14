import { deletePost } from './pages/deletePostPage.js';
import { initVolunteerPost } from './pages/homePage.js';
import { postVolunteer } from './pages/postVolunteer.js';
import { updatePost } from './pages/updatePostPage.js';

const loadApp = async () => {
  postVolunteer();
  await initVolunteerPost();
  updatePost();
  deletePost();
};
window.addEventListener('load', loadApp());

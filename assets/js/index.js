import { deletePost } from './pages/deletePostPage.js';
import { initVolunteerPost } from './pages/homePage.js';
import { creatUserLogin } from './pages/login.js';
import { postVolunteer } from './pages/postVolunteer.js';
import { registerUser } from './pages/registerPage.js';
import { updatePost } from './pages/updatePostPage.js';

const loadApp = async () => {
  creatUserLogin();
  registerUser();
  postVolunteer();
  await initVolunteerPost();
  updatePost();
  deletePost();
};
window.addEventListener('load', loadApp());

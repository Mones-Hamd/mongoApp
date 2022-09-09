import express from 'express';
import {
  homeRouter,
  needVolunteerRouter,
  showMoreRouter,
  updateRouter,
  volunteerRouter,
} from '../services/render.js';
import {
  createPost,
  deletePost,
  getPosts,
  updatePost,
} from '../controller/controller.js';
const router = express.Router();
router.get('/', homeRouter);
router.get('/volunteer', volunteerRouter);
router.get('/volunteer/:id', showMoreRouter);
router.get('/update/:id', updateRouter);
router.get('/needVolunteer', needVolunteerRouter);
//API
router.post('/api/volunteer', createPost);
router.get('/api/volunteer', getPosts);
router.get('/api/volunteer/:id', getPosts);
router.put('/api/volunteer/:id', updatePost);
router.delete('/api/volunteer/:id', deletePost);

export default router;

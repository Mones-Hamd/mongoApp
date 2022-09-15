import express from 'express';
import {
  homeRouter,
  loginRouter,
  needVolunteerRouter,
  registerRouter,
  updateRouter,
  volunteerRouter,
} from '../services/render.js';
import {
  createPost,
  deletePost,
  getPosts,
  updatePost,
} from '../controller/controller.js';
import { login, register } from '../controller/AuthController.js';
import { authenticate } from './AuthRoute.js';
const router = express.Router();
router.get('/home', homeRouter);
router.get('/volunteer', authenticate, volunteerRouter);
router.get('/login', loginRouter);
router.get('/register', registerRouter);
router.get('/update/:id', updateRouter);
router.get('/needVolunteer', needVolunteerRouter);
//API
router.post('/api/register', register);
router.post('/api/login', login);
router.post('/api/volunteer', createPost);
router.get('/api/volunteer', getPosts);
router.get('/api/volunteer/:id', getPosts);
router.put('/api/volunteer/:id', updatePost);
router.delete('/api/volunteer/:id', deletePost);

export default router;

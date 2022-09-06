import express from 'express';
import {
  homeRouter,
  needVolunteerRouter,
  volunteerRouter,
} from '../services/render.js';
const router = express.Router();
router.get('/', homeRouter);
router.get('/volunteer', volunteerRouter);
router.get('/needVolunteer', needVolunteerRouter);

export default router;

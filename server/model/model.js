import { ObjectId } from 'bson';
import mongoose from 'mongoose';

let schema = new mongoose.Schema({
  name: {
    type: String,
  },

  date: String,
  post: String,
  email: String,
  job: String,
  available: String,
  place: String,
  likes: Number,
  comments: [
    {
      comment_body: {
        type: String,
      },
      order: Number,
    },
  ],
});
export const VolunteerDb = mongoose.model('Volunteerdb', schema);

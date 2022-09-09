import { ObjectId } from 'bson';
import mongoose from 'mongoose';

let schema = new mongoose.Schema({
  name: {
    type: String,
  },
  date: String,
  place: {
    type: String,
  },
  job: String,
  work: {
    type: String,
  },
  good: String,
  available: {
    type: String,
  },
  details: String,
});
export const VolunteerDb = mongoose.model('Volunteerdb', schema);

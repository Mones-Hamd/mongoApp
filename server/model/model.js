import mongoose from 'mongoose';

let schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  place: {
    type: String,
    required: true,
  },
  job: String,
  work: {
    type: String,
    required: true,
  },
  good: String,
  available: {
    type: String,
    required: true,
  },
  details: String,
});
export const VolunteerDb = mongoose.model('Volunteerdb', schema);

import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  user_name: {
    type: String,
    require: true,
  },
  user_last_name: {
    type: String,
    require: true,
  },
  user_email: {
    type: String,
    require: true,
  },
  user_password: {
    type: String,
    require: true,
  },
});

export const User = mongoose.model('Users', userSchema);

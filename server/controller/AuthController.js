import { User } from '../model/userModel.js';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

export const register = async (req, res, next) => {
  bcryptjs.hash(req.body.user_password, 10, async (err, hashedPass) => {
    try {
      let user = new User({
        user_name: req.body.user_name,
        user_last_name: req.body.user_last_name,
        user_email: req.body.user_email,
        user_password: hashedPass,
      });
      console.log(hashedPass);
      await user.save();
      await res.send(user);
    } catch (err) {
      await res.status(500).send({ msg: err.msg || 'somthing went wrong' });
    }
  });
};
export const login = async (req, res, next) => {
  let email = req.body.user_email;
  let password = req.body.user_password;
  const user = { name: email };
  const findUser = await User.findOne({ user_email: email });

  if (findUser) {
    bcryptjs.compare(password, findUser.user_password, async (err, result) => {
      if (err) {
        await res.json({ msg: err });
      }
      if (result) {
        let token = jwt.sign({ name: findUser.user_name }, process.env.TOKEN, {
          expiresIn: '1h',
        });
        await res.status(200).json({ msg: 'login success', token });
      } else {
        await res.json({ msg: 'your password is incorrect' });
      }
    });
  } else {
    await res.json({ msg: 'some error ' });
  }
};

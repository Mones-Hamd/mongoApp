import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();
export const authenticate = async (req, res, next) => {
  try {
    console.log(await req.headers);
    const token = req.headers.authorization.split(' ')[1];
    console.log(token);
    const decode = jwt.verify(token, process.env.TOKEN);
    req.user = decode;
    next();
  } catch (err) {
    res.json({ msg: 'authenticate faild' });
  }
};

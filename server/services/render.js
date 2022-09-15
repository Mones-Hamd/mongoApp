import fetch from 'node-fetch';
export const homeRouter = (req, res) => {
  res.render('index');
};
export const volunteerRouter = (req, res) => {
  res.render('volunteer');
};
export const updateRouter = async (req, res) => {
  const url = `http://localhost:3000/api/volunteer/${req.params.id}`;

  const response = await fetch(url);

  const data = await response.json();

  res.render('updatePost', data);
};
export const needVolunteerRouter = (req, res) => {
  res.render('needVolunteer');
};
export const loginRouter = (req, res) => {
  res.render('userLogin');
};
export const registerRouter = (req, res) => {
  res.render('userRegister');
};

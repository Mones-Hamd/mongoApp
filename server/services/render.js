import exp from 'constants';

export const homeRouter = (req, res) => {
  res.render('index');
};
export const volunteerRouter = (req, res) => {
  res.render('volunteer');
};
export const needVolunteerRouter = (req, res) => {
  res.render('needVolunteer');
};

import fetch from 'node-fetch';
export const homeRouter = (req, res) => {
  res.render('index');
};
export const volunteerRouter = (req, res) => {
  res.render('volunteer');
};
// export const showMoreRouter = async (req, res) => {
//   console.log(req.params.id);
//   const url = `http://localhost:3000/api/volunteer/${req.params.id}`;

//   const response = await fetch(url);

//   const data = await response.json();
//   console.log(data);
//   res.render('showMore', data);
// };
export const updateRouter = async (req, res) => {
  const url = `http://localhost:3000/api/volunteer/${req.params.id}`;

  const response = await fetch(url);

  const data = await response.json();
  const name = data.forEach(({ name }) => {
    return name;
  });

  res.render('updatePost', name);
};
export const needVolunteerRouter = (req, res) => {
  res.render('needVolunteer');
};

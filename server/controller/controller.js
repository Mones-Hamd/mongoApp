import { VolunteerDb } from '../model/model.js';

export const createPost = async (req, res) => {
  try {
    if (!req.body) {
      res.status(400).send({ msg: 'the content can not be empty !' });
      return;
    }

    const volunteer = new VolunteerDb({
      name: req.body.name,
      place: req.body.place,
      job: req.body.job,
      work: req.body.work,
      good: req.body.good,
      available: req.body.available,
      details: req.body.details,
    });
    volunteer.save(volunteer);
    await res.send(volunteer);
  } catch (err) {
    res.status(500).send({ msg: err.msg || 'somthing went wrong ' });
  }
};

//get posts
export const getPosts = async (req, res) => {
  try {
    if (req.query.id) {
      const result = await VolunteerDb.findById(req.query.id);
      if (!result) {
        res
          .status(404)
          .send({ msg: `there is no post with this id ${req.query.id}` });
        return;
      } else {
        res.send(result);
      }
    } else {
      const result = await VolunteerDb.find();
      await res.send(result);
    }
  } catch (err) {
    console.log(err);
  }
};
// update post
export const updatePost = async (req, res) => {
  try {
    if (!req.body) {
      res.status(400).send({ msg: 'the content can not be empty !' });
      return;
    }
    const result = await VolunteerDb.findByIdAndUpdate(
      req.params.id,
      req.body,
      { useFindAndModify: false },
    );
    if (!result) {
      await res.status(404).send({ msg: 'there is no post ' });
    } else {
      await res.send(result);
    }
  } catch (err) {
    res.status(500).send({ msg: 'ERROR ' });
  }
};
//delete post
export const deletePost = async (req, res) => {
  try {
    const result = await VolunteerDb.findByIdAndDelete(req.params.id);
    if (!result) {
      await res.status(404).send({ msg: 'there is no post ' });
    } else {
      await res.send({ msg: 'deleted succuss' });
    }
  } catch (err) {
    res.status(500).send({ msg: 'ERROR ' });
  }
};

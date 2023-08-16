const User = require("../models/user");
const userCltr = {};

userCltr.list = (req, res) => {
  User.find()
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      res.json(err);
    });
};

userCltr.create = (req, res) => {
  const body = req.body;
  User.create(body)
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      res.json(err);
    });
};

userCltr.update = (req, res) => {
  const body = req.body;
  const id = req.params.id;
  User.findByIdAndUpdate(id, body, { new: true, runValidators: true })
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      res.json(err);
    });
};

userCltr.destroy = (req, res) => {
  const id = req.params.id;
  User.findByIdAndDelete(id)
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      res.json(err);
    });
};
module.exports = userCltr;

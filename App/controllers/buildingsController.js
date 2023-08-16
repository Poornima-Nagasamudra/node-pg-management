const Buildings = require("../models/buildings");
const buildingsCltr = {};

buildingsCltr.list = (req, res) => {
  Buildings.find()
    .then((buildings) => {
      res.json(buildings);
    })
    .catch((err) => {
      res.json(err);
    });
};

buildingsCltr.create = (req, res) => {
  const body = req.body;
  Buildings.create(body)
    .then((buildings) => {
      res.json(buildings);
    })
    .catch((err) => {
      res.json(err);
    });
};

buildingsCltr.update = (req, res) => {
  const body = req.body;
  const id = req.params.id;
  Buildings.findByIdAndUpdate(id, body, { new: true, runValidators: true })
    .then((buildings) => {
      res.json(buildings);
    })
    .catch((err) => {
      res.json(err);
    });
};

buildingsCltr.destroy = (req, res) => {
  const id = req.params.id;
  Buildings.findByIdAndDelete(id)
    .then((buildings) => {
      res.json(buildings);
    })
    .catch((err) => {
      res.json(err);
    });
};
module.exports = buildingsCltr;

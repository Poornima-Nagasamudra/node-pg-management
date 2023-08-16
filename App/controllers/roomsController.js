const Rooms = require("../models/rooms");
const roomsCltr = {};

roomsCltr.list = (req, res) => {
  Rooms.find()
    .then((rooms) => {
      res.json(rooms);
    })
    .catch((err) => {
      res.json(err);
    });
};

roomsCltr.create = (req, res) => {
  const body = req.body;
  Rooms.create(body)
    .then((rooms) => {
      res.json(rooms);
    })
    .catch((err) => {
      res.json(err);
    });
};

roomsCltr.update = (req, res) => {
  const body = req.body;
  const id = req.params.id;
  Rooms.findByIdAndUpdate(id, body, { new: true, runValidators: true })
    .then((rooms) => {
      res.json(rooms);
    })
    .catch((err) => {
      res.json(err);
    });
};

roomsCltr.destroy = (req, res) => {
  const id = req.params.id;
  Rooms.findByIdAndDelete(id)
    .then((rooms) => {
      res.json(rooms);
    })
    .catch((err) => {
      res.json(err);
    });
};
module.exports = roomsCltr;

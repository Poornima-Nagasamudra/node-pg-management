const Tenants = require("../models/tenants");
const tenantsCltr = {};

tenantsCltr.list = (req, res) => {
  Tenants.find()
    .then((tenants) => {
      res.json(tenants);
    })
    .catch((err) => {
      res.json(err);
    });
};

tenantsCltr.create = (req, res) => {
  const body = req.body;
  Tenants.create(body)
    .then((tenants) => {
      res.json(tenants);
    })
    .catch((err) => {
      res.json(err);
    });
};

tenantsCltr.update = (req, res) => {
  const body = req.body;
  const id = req.params.id;
  Tenants.findByIdAndUpdate(id, body, { new: true, runValidators: true })
    .then((tenants) => {
      res.json(tenants);
    })
    .catch((err) => {
      res.json(err);
    });
};

tenantsCltr.destroy = (req, res) => {
  const id = req.params.id;
  Tenants.findByIdAndDelete(id)
    .then((tenants) => {
      res.json(tenants);
    })
    .catch((err) => {
      res.json(err);
    });
};
module.exports = tenantsCltr;

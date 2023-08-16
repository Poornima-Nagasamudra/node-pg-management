const express = require("express");

const router = express.Router();
const roomsCltr = require('../App/controllers/roomsController');
const userCltr = require("../App/controllers/userController");
const buildingsCltr = require("../App/controllers/buildingsController");
const tenantsCltr = require("../App/controllers/tenantsController");

router.get("/api/user", userCltr.list);
router.post("/api/user", userCltr.create);
router.put("/api/user/:id", userCltr.update);
router.delete("/api/user/:id", userCltr.destroy);

router.get("/api/rooms", roomsCltr.list);
router.post("/api/rooms", roomsCltr.create);
router.put("/api/rooms/:id", roomsCltr.update);
router.delete("/api/rooms/:id", roomsCltr.destroy);

router.get("/api/buildings", buildingsCltr.list);
router.post("/api/buildings", buildingsCltr.create);
router.put("/api/buildings/:id", buildingsCltr.update);
router.delete("/api/buildings/:id", buildingsCltr.destroy);

router.get("/api/tenants", tenantsCltr.list);
router.post("/api/tenants", tenantsCltr.create);
router.put("/api/tenants/:id", tenantsCltr.update);
router.delete("/api/tenants/:id", tenantsCltr.destroy);
module.exports = router;

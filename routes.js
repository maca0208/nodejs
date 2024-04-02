const express = require("express");
const router = express.Router();
const { getArtikli, getForm, getDelete, getEdit, postForm, postEdit } = require("../Contoller/formular");

router.get("/form", getForm);
router.post("/form", postForm);
router.get("/artikli", getArtikli);
router.get("/delete", getDelete);
router.get("/edit", getEdit);
router.post("/edit", postEdit);

module.exports = router;
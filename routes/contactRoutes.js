const express = require("express");
const router = express.Router();
const { getContacts, getContact, createContact, UpdateContact, deleteContact } = require("../controllers/contactController")
router.route("/").get(getContacts).post(createContact);
router.route("/:id").put(UpdateContact).get(getContact).delete(deleteContact);

module.exports = router;
const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");
//@desc Get ALl Contacts
//@desc GET /api/contacts
//@access public
const getContacts = asyncHandler(async (req, res) => {
  const contacts = await Contact.find();
  res.status(201).json(contacts);
});
//@desc Get a Contacts
//@desc GET /api/contacts/:id
//@access public
const getContact = asyncHandler(async (req, res) => {
  res.status(201).json({
    message: "Get a contact",
  });
});

//@desc Create New  Contact
//@desc Post /api/contacts
//@access public
const createContact = asyncHandler(async (req, res) => {
  console.log("This is the request body: ", req.body);
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All the fields are mandatory");
  }
  const contact = await Contact.create({
    name,
    email,
    phone,
  });
  res.status(201).json(contact);
});

//@desc Update Contact
//@desc PUT /api/contacts/:id
//@access public
const UpdateContact = asyncHandler(async (req, res) => {
  res.status(201).json({ message: `Update contact for ${req.params.id}` });
});

//@desc Delete Contact
//@desc DELETE /api/contacts/:id
//@access public
const deleteContact = asyncHandler(async (req, res) => {
  res.status(201).json({ message: `Delete Contact for ${req.params.id}` });
});
module.exports = {
  getContacts,
  getContact,
  UpdateContact,
  createContact,
  deleteContact,
};

const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");
//@desc Get ALl Contacts
//@desc GET /api/contacts
//@access private
const getContacts = asyncHandler(async (req, res) => {
  const contacts = await Contact.find({
    user_id: req.user.id
  });
  res.status(201).json(contacts);
});
//@desc Get a Contacts
//@desc GET /api/contacts/:id
//@access private
const getContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id); // Fixed method name
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }
  res.status(200).json(contact);
});
//@desc Create New  Contact
//@desc Post /api/contacts
//@access private
const createContact = asyncHandler(async (req, res) => {
  // console.log("This is the request body: ", req.body);
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All the fields are mandatory");
  }
  const contact = await Contact.create({
    name,
    email,
    phone,
    user_id: req.user_id
  });
  res.status(201).json(contact);
});

//@desc Update Contact
//@desc PUT /api/contacts/:id
//@access private
const updateContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }
  if (contact.user_id.toString() !== req.user_id) {
    res.status(403);
    throw new Error("User do not have permission to update")
  }
  const updatedContact = await Contact.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.status(200).json(updatedContact);
});

//@desc Delete Contact
//@desc DELETE /api/contacts/:id
//@access private
const deleteContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }
  if (contact.user_id.toString() !== req.user_id) {
    res.status(403);
    throw new Error("User do not have permission to delete")
  }
  await Contact.deleteOne({ _id: req.params.id });
  res.status(200).json(contact);
});
module.exports = {
  getContacts,
  getContact,
  updateContact,
  createContact,
  deleteContact,
};

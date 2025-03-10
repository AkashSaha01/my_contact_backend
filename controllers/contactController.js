//@desc Get ALl Contacts
//@desc GET /api/contacts
//@access public
const getContacts = (req, res) => {
    res.status(201).json({ message: "Get All Contacts" });
}
//@desc Get a Contacts
//@desc GET /api/contacts/:id
//@access public
const getContact = (req, res) => {
    res.status(201).json({
        message: "Get a contact"
    })
}
//@desc Create New  Contact
//@desc Post /api/contacts
//@access public
const createContact = (req, res) => {
    console.log("This is the request body: ", req.body);
    const { name, email, best } = req.body;
    if (!name || !email || !best) {
        res.status(400);
        throw new Error("All the fields are mandatory");
    }
    res.status(201).json({ message: "Create Contact" });
}

//@desc Update Contact
//@desc PUT /api/contacts/:id
//@access public
const UpdateContact = (req, res) => {
    res.status(201).json({ message: `Update contact for ${req.params.id}` });
}

//@desc Delete Contact
//@desc DELETE /api/contacts/:id
//@access public
const deleteContact = (req, res) => {
    res.status(201).json({ message: `Delete Contact for ${req.params.id}` });
}
module.exports = { getContacts, getContact, UpdateContact, createContact, deleteContact };
const asyncHandler = require("express-async-handler");

//@desc Get all contacts
//@route GET /api/contact
//@access public
const getContacts = asyncHandler(async (req,res) => {
    res.status(200);
    res.json({message: `Get contacts`,sender: "Shanthakumar"});
});

//@desc Get contact
//@route GET /api/contact/:id
//@access public
const getContact = asyncHandler(async (req,res) => {
    res.status(200);
    res.json({message: `Get contacts for ${req.params.id}`,sender: "Shanthakumar"});
});

//@desc Create new contact
//@route POST /api/contact
//@access public
const createContact = asyncHandler(async (req,res) => {
    console.log(req.body);
    const {name, email, phone} = req.body;
    if(!name || !email || !phone){
        res.status(400);
        throw new Error("All fields are required")
    }

    res.status(200);
    res.json({message: `Create contact`,sender: "Shanthakumar"});
});

//@desc Update contact
//@route PUT /api/contact/:id
//@access public
const updateContact = asyncHandler(async (req,res) => {
    res.status(200);
    res.json({message: `Update contact for ${req.params.id}`,sender: "Shanthakumar"});
});

//@desc Update contact
//@route PUT /api/contact/:id
//@access public
const deleteContact = asyncHandler(async (req,res) => {
    res.status(200);
    res.json({message: `Delete contact of ${req.params.id}`,sender: "Shanthakumar"});
});

module.exports = {getContacts, createContact, getContact, updateContact, deleteContact}
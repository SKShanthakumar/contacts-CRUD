const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel")

//@desc Get all contacts
//@route GET /api/contact
//@access public
const getContacts = asyncHandler(async (req,res) => {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
});

//@desc Get contact
//@route GET /api/contact/:id
//@access public
const getContact = asyncHandler(async (req,res) => {
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not found");
    }
    res.status(200).json(contact);
});

//@desc Create new contact
//@route POST /api/contact
//@access public
const createContact = asyncHandler(async (req,res) => {
    //console.log(req.body);
    const {name, email, phone} = req.body;
    if(!name || !email || !phone){
        res.status(400);
        throw new Error("All fields are required")
    }

    const contact = await Contact.create({
        name,email,phone
    });
    res.status(200).json(contact);
});

//@desc Update contact
//@route PUT /api/contact/:id
//@access public
const updateContact = asyncHandler(async (req,res) => {
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not found");
    }

    const updated = await Contact.findByIdAndUpdate(req.params.id, req.body, {new:true});
    res.status(200).json(updated);
});

//@desc Update contact
//@route PUT /api/contact/:id
//@access public
const deleteContact = asyncHandler(async (req,res) => {
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not found");
    }

    await Contact.remove();
    res.status(200).json({message: "Contact removed"},contact);
});

module.exports = {getContacts, createContact, getContact, updateContact, deleteContact}
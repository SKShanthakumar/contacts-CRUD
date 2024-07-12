const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");

//@desc Get all contacts
//@route GET /api/contact
//@access private
const getContacts = asyncHandler(async (req,res) => {
    const contacts = await Contact.find({user_id: req.user.id});
    res.status(200).json(contacts);
});

//@desc Get contact
//@route GET /api/contact/:id
//@access private
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
//@access private
const createContact = asyncHandler(async (req,res) => {
    //console.log(req.body);
    const {name, email, phone} = req.body;
    if(!name || !email || !phone){
        res.status(400);
        throw new Error("All fields are required")
    }
    
    const contact = await Contact.create({
        user_id: req.user.id,
        name,
        email,
        phone,
    });
    res.status(200).json(contact);
});

//@desc Update contact
//@route PUT /api/contact/:id
//@access private
const updateContact = asyncHandler(async (req,res) => {
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not found");
    }

    if(contact.user_id.toString() !== req.user.id){
        res.status(403);
        throw new Error("User don't have permission to update another user's contacts")
    }

    const updated = await Contact.findByIdAndUpdate(req.params.id, req.body, {new:true});
    res.status(200).json(updated);
});

//@desc Delete a contact
//@route DELETE /api/contact/:id
//@access private
const deleteContact = asyncHandler(async (req,res) => {
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not found");
    }

    if(contact.user_id.toString() !== req.user.id){
        res.status(403);
        throw new Error("User don't have permission to delete another user's contacts")
    }

    await Contact.deleteOne({_id: req.params.id});
    res.status(200).json({message: "Contact removed"});
});

module.exports = {getContacts, createContact, getContact, updateContact, deleteContact}
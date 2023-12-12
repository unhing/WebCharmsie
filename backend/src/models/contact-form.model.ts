import mongoose from "mongoose";

const Schema = mongoose.Schema;

const contactForm = new Schema({
  name: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
  },
});

const ContactForm = mongoose.model("ContactForm", contactForm);

export default ContactForm;

const Contact = require("../models/Contact");

// Create a new contact message
const createContact = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Basic validation
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Name, email and message are required.",
      });
    }

    const contact = await Contact.create({
      name,
      email,
      message,
    });

    res.status(201).json({
      success: true,
      message: "Your message has been received successfully.",
      data: contact,
    });
  } catch (error) {
    console.error("Contact creation error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to submit your message.",
    });
  }
};

module.exports = {
  createContact,
};
const mongoose = require("mongoose");

// Connection string with the database name specified (e.g., 'myNewDatabase')
const uri =
  "mongodb+srv://admin:admin%40123@cluster0.8wnnoy6.mongodb.net/myNewDatabase";

mongoose
  .connect(uri)
  .then(() => {
    console.log("Successfully connected to MongoDB");

    // Define User schema and model
    const UserSchema = new mongoose.Schema({
      name: { type: String },
      email: { type: String },
      password: { type: String },
    });

    const User = mongoose.model("User", UserSchema);

    // Create a new user
    const user = new User({
      name: "Anant Pandey",
      email: "anant432001@gmail.com",
      password: "123456",
    });

    // Save the user to the database
    user
      .save()
      .then((savedUser) => {
        console.log("User saved:", savedUser);
      })
      .catch((err) => {
        console.error("Error saving user:", err);
      });
  })
  .catch((err) => {
    console.error("Connection error:", err);
  });

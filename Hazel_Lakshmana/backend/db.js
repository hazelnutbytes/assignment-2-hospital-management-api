const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://hazellakshmana:hazel123@cluster0.uzxs5fz.mongodb.net/hospitalDB?retryWrites=true&w=majority")
    .then(() => {
        console.log("MongoDB connected");
    })
    .catch((err) => {
        console.log("MongoDB connection error:", err);
    });

module.exports = mongoose;

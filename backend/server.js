const express = require("express");
const cors = require("cors");
const session = require("express-session");
const passport = require("./config/passport");

require("./db");

const authRoutes = require("./routes/authRoutes");
const hospitalRoutes = require("./routes/hospitalRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use(
    session({
        secret: "hospital-secret",
        resave: false,
        saveUninitialized: false
    })
);

app.use(passport.initialize());
app.use(passport.session());

app.get("/", (req, res) => {
    res.status(200).send("Welcome to Hospital API");
});

app.use("/", authRoutes);
app.use("/hospitals", hospitalRoutes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

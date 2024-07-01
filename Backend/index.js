const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const userRoutes = require("./Routes/UserRoutes")
const path = require("path");
const cors = require("cors");
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());


const PORT = 7000;

// Middleware to serve static files
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use("/", userRoutes)


// Mongo Connection
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log('Connected to MongoDB');
});

app.listen(PORT, () => {
    console.log(`Server is Running on Port ${PORT}`);
});

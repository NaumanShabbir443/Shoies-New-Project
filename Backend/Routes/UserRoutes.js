const express = require("express");
const router = express.Router();
const userModel = require("../Model/UserModel");
const multer = require('multer');

// Multer configuration
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); // Save files to the 'uploads' directory
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname); // Rename files with a unique timestamp
    }
});
const upload = multer({ storage: storage });

router.post("/users", upload.single('image'), async (req, res) => {
    try {
        const body = req.body;
        console.log("body", body);
        console.log("file sdsd", req.file);

        if (!req.file) {
            return res.status(400).json({ error: "No file uploaded." });
        }

        const newUser = new userModel({
            title: body.title,
            detail: body.detail,
            price: body.price,
            file: req.file.path, // Save the file path in the database
            rating: body.rating,
            // file: body.file
        });

        const saveData = await newUser.save();
        res.status(201).json(saveData);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "An error occurred while creating the user." });
    }
});

router.get("/getUsers", async (req, res) => {
    try {
        const users = await userModel.find()
        res.status(201).json(users)
    }
    catch (error) {
        console.log("Data is not get from database", error)
    }

})

router.post("/otp", async (req, res) => {
    try {
        let { num } = req.body
        const accountSid = process.env.TWILIO_ACCOUNT_SID;
        const authToken = process.env.Auth_TOKEN;
        const servicesId = process.env.SERVICES_ID
        const client = require('twilio')(accountSid, authToken);

        client.verify.v2.services(servicesId)
            .verifications
            .create({ to: num, channel: 'sms' })
            .then(verification => console.log(verification.sid));
    } catch (error) {
        console.log("otp not send ", error)

    }

})


module.exports = router;

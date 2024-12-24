import routes from "./Portfolio Project/scripts/routes.js"
import express from 'express';
import mongoose from "mongoose";
import dotenv from "dotenv";
const app = express();
dotenv.config();
app.use(express.json());
app.use("/skills/", routes)

mongoose.connect(`mongodb+srv://${process.env.MONGOCRED}@database.i7urz.mongodb.net/?retryWrites=true&w=majority&appName=Database`).then(
    () => {
        console.log("Connected to MongoDB!");
        app.listen(3000, 'localhost', () => {
            console.log('Server is running on port 3000');
        });
    })
    .catch(() => {
        console.log("Connection unsuccessful!");
    });

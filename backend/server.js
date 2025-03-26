const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/productivity");

const timeSchema = new mongoose.Schema({
    site: String,
    duration: Number
});
const Time = mongoose.model("Time", timeSchema);

app.post("/api/track", async (req, res) => {
    console.log("Received Data:", req.body); // Log the data
    const { site, duration } = req.body;
    await Time.findOneAndUpdate({ site }, { $inc: { duration } }, { upsert: true });
    res.send({ message: "Time logged" });
});


app.get("/api/report", async (req, res) => {
    const data = await Time.find();
    res.send(data);
});

app.delete("/api/clear", async (req, res) => {
    await Time.deleteMany({});
    res.send({ message: "Data cleared" });
});

app.listen(5000, () => console.log("Server running on port 5000"));

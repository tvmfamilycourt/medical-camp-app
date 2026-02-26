const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let patients = [];
let counter = 1;

// Save patient
app.post("/api/patients", (req, res) => {
  const year = new Date().getFullYear();
  const id = `MC-${year}-${String(counter).padStart(4, "0")}`;
  counter++;

  const patient = {
    id,
    campName: req.body.campName,
    campDate: req.body.campDate,
    name: req.body.name,
    age: req.body.age,
    gender: req.body.gender,
    address: req.body.address,
    mobile: req.body.mobile,
    createdAt: new Date()
  };

  patients.push(patient);
  res.json(patient);
});

// Get all patients
app.get("/api/patients", (req, res) => {
  res.json(patients);
});

// Root route (so browser doesn't say Cannot GET /)
app.get("/", (req, res) => {
  res.send("Medical Camp Backend is running ✅");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
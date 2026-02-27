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
  name: req.body.name,
  age: req.body.age,
  gender: req.body.gender,
  address: req.body.address,
  mobile: req.body.mobile,
  campName: req.body.campName,
  campDate: req.body.campDate,
};
  patients.push(patient);
  res.json(patient);
});

// Get all patients
app.get("/api/patients/:id", (req, res) => {
  const patient = patients.find(p => p.id === req.params.id);

  if (!patient) {
    return res.status(404).json({ error: "Patient not found" });
  }

  res.json(patient);
});

app.get("/api/patients/:id", (req, res) => {
  const patient = patients.find(p => p.id === req.params.id);
  res.json(patient);
});

// Root route (so browser doesn't say Cannot GET /)
app.get("/", (req, res) => {
  res.send("Medical Camp Backend is running ✅");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
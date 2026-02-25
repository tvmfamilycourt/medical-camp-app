let counter = 1;

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
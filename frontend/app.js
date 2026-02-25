const API = "http://localhost:3000/api/patients";
app.get("/", (req, res) => {
  res.send("Backend is running 👍");
});

async function save() {
  const data = {
  campName: campName.value,
  campDate: campDate.value,
  name: name.value,
  age: age.value,
  gender: gender.value,
  address: address.value,
  mobile: mobile.value
};

  await fetch(API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });

  loadPatients();
}

async function loadPatients() {
  const res = await fetch(API);
  const patients = await res.json();
  list.innerHTML = "";
  patients.forEach(p => {
    list.innerHTML += `<li><a href="view.html?id=${p.id}">${p.name}</a></li>`;
  });
}

loadPatients();
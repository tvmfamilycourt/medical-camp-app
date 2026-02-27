const API = "https://medical-camp-app-2uin.onrender.com/api/patients";

async function save() {
  const data = {
    campName: "Medical Camp 2026",
    campDate: "07.03.2026",
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
    list.innerHTML += `<li>${p.name} - ${p.mobile}</li>`;
  });
}

loadPatients();
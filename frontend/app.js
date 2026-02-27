const API = "https://medical-camp-app-2uin.onrender.com/api/patients";

// 🔒 Set camp details here (change per camp)
const CAMP_NAME = "Medical Camp 2026 – DLSA TIRUVANNAMALAI";
const CAMP_DATE = "2026-03-07";

// Show on page
document.getElementById("campNameText").textContent = CAMP_NAME;
document.getElementById("campDateText").textContent = CAMP_DATE;

const name = document.getElementById("name");
const age = document.getElementById("age");
const gender = document.getElementById("gender");
const address = document.getElementById("address");
const mobile = document.getElementById("mobile");
const list = document.getElementById("patientList");

async function save() {
  const data = {
    campName: CAMP_NAME,
    campDate: CAMP_DATE,
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

  name.value = "";
  age.value = "";
  gender.value = "";
  address.value = "";
  mobile.value = "";

  loadPatients();
}
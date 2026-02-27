const API = "https://medical-camp-backend.onrender.com/api/patients";

async function save() {
  const name = document.getElementById("name").value.trim();
  const age = document.getElementById("age").value.trim();
  const gender = document.getElementById("gender").value;
  const address = document.getElementById("address").value.trim();
  const mobile = document.getElementById("mobile").value.trim();

  if (!name || !age || !gender || !address || !mobile) {
    alert("Please fill all details 🙏");
    return;
  }

  const data = {
    campName: "Medical Camp 2026",
    campDate: "07.03.2026",
    name,
    age,
    gender,
    address,
    mobile
  };

  await fetch(API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });

  alert("Patient registered successfully ✅");

  document.getElementById("name").value = "";
  document.getElementById("age").value = "";
  document.getElementById("gender").value = "";
  document.getElementById("address").value = "";
  document.getElementById("mobile").value = "";
}

  await fetch(API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });

  alert("Patient registered successfully ✅");

  document.getElementById("name").value = "";
  document.getElementById("age").value = "";
  document.getElementById("gender").value = "";
  document.getElementById("address").value = "";
  document.getElementById("mobile").value = "";
}
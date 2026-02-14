/* SERVICES DATA */
const services = [
  { name: "Engine Repair", price: 5000, desc: "Complete engine diagnostics and repair" },
  { name: "Brake Service", price: 2500, desc: "Brake inspection and replacement" },
  { name: "Oil Change", price: 1200, desc: "Premium oil replacement" },
  { name: "Wheel Alignment", price: 1800, desc: "Precision wheel balancing" },
  { name: "AC Repair", price: 3000, desc: "Cooling system repair" },
  { name: "Battery Replacement", price: 3500, desc: "Genuine battery installation" }
];

/* LOAD SERVICES */
function loadServices() {
  const container = document.getElementById("services");
  let selected = JSON.parse(localStorage.getItem("services")) || [];
  let total = 0;

  services.forEach((s, i) => {
    const checked = selected.includes(s.name);
    if (checked) total += s.price;

    container.innerHTML += `
      <div class="card service-card">
        <h3>${s.name}</h3>
        <p>${s.desc}</p>
        <p>₹${s.price}</p>
        <input type="checkbox" ${checked ? "checked" : ""} onchange="toggleService('${s.name}',${s.price})">
      </div>
    `;
  });

  document.getElementById("total").innerText = total;
}

/* TOGGLE SERVICE */
function toggleService(name, price) {
  let selected = JSON.parse(localStorage.getItem("services")) || [];
  let total = Number(document.getElementById("total").innerText);

  if (selected.includes(name)) {
    selected = selected.filter(s => s !== name);
    total -= price;
  } else {
    selected.push(name);
    total += price;
  }

  localStorage.setItem("services", JSON.stringify(selected));
  document.getElementById("total").innerText = total;
}

/* BOOKING PAGE */
function loadBooking() {
  const list = document.getElementById("selectedServices");
  const services = JSON.parse(localStorage.getItem("services")) || [];
  list.value = services.join(", ");
}

function calculateBooking() {
  let base = Number(document.getElementById("baseCost").value);
  let type = document.getElementById("serviceType").value;
  let total = type === "Express" ? base + 1000 : base;
  document.getElementById("summary").innerText = "Total Cost: ₹" + total;
}

/* GALLERY MODAL */
function openModal(src) {
  document.getElementById("modal").style.display = "flex";
  document.getElementById("modalImg").src = src;
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}
const products = {
  "compact-bench-drill-press": {
    category: "Machining",
    title: "Compact Bench Drill Press",
    model: "BMW-DP-120",
    price: "$549.00",
    compare: "$619.00",
    badge: "Shop Equipment",
    image: "assets/drill-press.jpg",
    summary: "Bench-top drilling equipment for small parts, maintenance work, fixture setup, and general shop use.",
    bullets: [
      "Compact bench footprint for maintenance rooms and small machine shops",
      "Adjustable table position for common drilling setups",
      "Suitable for light-duty industrial and repair applications",
      "Email for current quote details and product options"
    ],
    specs: [
      ["Use", "Shop drilling"],
      ["Format", "Bench-top machine"],
      ["Category", "Machining equipment"],
      ["Inquiry", "Email for quote"]
    ]
  },
  "precision-machine-vise": {
    category: "Workholding",
    title: "Precision Machine Vise",
    model: "BMW-VS-060",
    price: "$129.00",
    compare: "$154.00",
    badge: "Workholding",
    image: "assets/machine-vise.jpg",
    summary: "Workholding vise for drill press and milling-style positioning tasks in shop and maintenance settings.",
    bullets: [
      "Machined jaws for repeatable part holding",
      "Useful for drilling, layout, and fixture-positioning tasks",
      "Fits common bench and machine-table workflows",
      "Email with application details for product guidance"
    ],
    specs: [
      ["Use", "Workholding"],
      ["Format", "Machine vise"],
      ["Category", "Shop tooling"],
      ["Inquiry", "Email application details"]
    ]
  },
  "hydraulic-scissor-lift-table": {
    category: "Handling",
    title: "Hydraulic Scissor Lift Table",
    model: "BMW-LT-500",
    price: "$489.00",
    compare: "$559.00",
    badge: "Material Handling",
    image: "assets/lift-table.jpg",
    summary: "Mobile lift table for positioning boxed parts, fixtures, tools, and shop supplies around work areas.",
    bullets: [
      "Scissor-lift platform supports ergonomic positioning",
      "Caster base helps move parts between workstations",
      "Useful for maintenance, assembly, and shop-floor support",
      "Email destination details for quote and shipping information"
    ],
    specs: [
      ["Use", "Material handling"],
      ["Format", "Mobile lift table"],
      ["Category", "Shop-floor equipment"],
      ["Inquiry", "Email for shipping details"]
    ]
  },
  "adjustable-roller-stand": {
    category: "Support",
    title: "Adjustable Roller Stand",
    model: "BMW-RS-220",
    price: "$89.00",
    compare: "$108.00",
    badge: "Machine Support",
    image: "assets/roller-stand.jpg",
    summary: "Height-adjustable roller support for feeding workpieces into saws, drill presses, and shop machines.",
    bullets: [
      "Adjustable height for matching common work surfaces",
      "Roller top helps support long workpieces during setup",
      "Foldable-style footprint for flexible shop use",
      "Email for current quote details"
    ],
    specs: [
      ["Use", "Machine-side support"],
      ["Format", "Roller stand"],
      ["Category", "Shop support"],
      ["Inquiry", "Email for details"]
    ]
  },
  "machine-coolant-pump-assembly": {
    category: "Maintenance",
    title: "Machine Coolant Pump Assembly",
    model: "BMW-CP-090",
    price: "$169.00",
    compare: "$198.00",
    badge: "Maintenance",
    image: "assets/coolant-pump.jpg",
    summary: "Compact pump assembly with flexible nozzle for compatible machine-tool coolant setups.",
    bullets: [
      "Designed for compatible shop coolant circulation setups",
      "Flexible nozzle helps direct coolant at the work area",
      "Useful for machine maintenance and replacement planning",
      "Email equipment details before ordering replacement assemblies"
    ],
    specs: [
      ["Use", "Machine maintenance"],
      ["Format", "Pump assembly"],
      ["Category", "Maintenance accessory"],
      ["Inquiry", "Email machine details"]
    ]
  },
  "flexible-led-machine-work-light": {
    category: "Accessories",
    title: "Flexible LED Machine Work Light",
    model: "BMW-WL-LED",
    price: "$74.00",
    compare: "$92.00",
    badge: "Accessory",
    image: "assets/work-light.jpg",
    summary: "Adjustable gooseneck task light for inspection, setup, and machine-side work areas.",
    bullets: [
      "Flexible arm supports directional task lighting",
      "Useful for inspection, setup, and close machine work",
      "Compact base for bench and equipment-side placement",
      "Email for quote and ordering details"
    ],
    specs: [
      ["Use", "Task lighting"],
      ["Format", "Flexible LED light"],
      ["Category", "Shop accessory"],
      ["Inquiry", "Email for quote"]
    ]
  }
};

const params = new URLSearchParams(window.location.search);
const slug = params.get("item") || "compact-bench-drill-press";
const product = products[slug] || products["compact-bench-drill-press"];
const mailLink = `mailto:info@bramleymachine.com?subject=${encodeURIComponent(`Inquiry - ${product.title}`)}`;

document.title = `${product.title} | Bramley Machine Works Inc.`;
document.querySelector('meta[name="description"]').setAttribute("content", `${product.title} from Bramley Machine Works Inc. Email for quote and product details.`);
document.getElementById("product-category").textContent = product.category;
document.getElementById("product-title").textContent = product.title;
document.getElementById("product-summary").textContent = product.summary;
document.getElementById("product-model").textContent = product.model;
document.getElementById("product-price").textContent = product.price;
document.getElementById("product-compare").textContent = product.compare;
document.getElementById("product-badge").textContent = product.badge;
document.getElementById("product-main-image").setAttribute("src", product.image);
document.getElementById("product-main-image").setAttribute("alt", `${product.title} product photo`);
document.querySelectorAll("[data-mail-link]").forEach((link) => link.setAttribute("href", mailLink));

const bullets = document.getElementById("product-bullets");
bullets.innerHTML = "";
product.bullets.forEach((text) => {
  const li = document.createElement("li");
  li.textContent = text;
  bullets.appendChild(li);
});

const specs = document.getElementById("product-specs");
specs.innerHTML = "";
product.specs.forEach(([label, value]) => {
  const row = document.createElement("div");
  row.innerHTML = `<dt>${label}</dt><dd>${value}</dd>`;
  specs.appendChild(row);
});

const related = Object.entries(products).filter(([key]) => key !== slug).slice(0, 3);
const relatedList = document.getElementById("related-products");
relatedList.innerHTML = "";
related.forEach(([key, item]) => {
  const card = document.createElement("article");
  card.className = "related-card";
  card.innerHTML = `
    <img src="${item.image}" alt="${item.title} product photo">
    <span>${item.category}</span>
    <h3>${item.title}</h3>
    <strong>${item.price}</strong>
    <a href="product-detail.html?item=${key}">View Details</a>
  `;
  relatedList.appendChild(card);
});

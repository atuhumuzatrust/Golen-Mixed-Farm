function sendOrder() {

const name = document.getElementById("name").value.trim();
const phone = document.getElementById("phone").value.trim();
const product = document.getElementById("product").value;
const quantity = document.getElementById("quantity").value.trim();

if (!name || !phone || !product || !quantity) {
    alert("⚠️ Please fill all fields before submitting your order.");
    return;
}

// WhatsApp message
const message =
` *New Order - Golen Mixed Farm*

 Name: ${name}
 Phone: ${phone}
 Product: ${product}
 Quantity: ${quantity}

 Kindly get back to me at your earliest convenience!`;

// WhatsApp link (IMPORTANT: correct format)
const whatsappURL =
"https://wa.me/256772673677?text=" + encodeURIComponent(message);

// Show status message
document.getElementById("message").innerText =
"Redirecting to WhatsApp...";

// Open WhatsApp (best method for mobile + desktop)
window.location.href = whatsappURL;

}
const GMF_WHATSAPP = "256772673677";

function sendOrder() {

    const name =
        document.getElementById("name")?.value.trim();

    const phone =
        document.getElementById("phone")?.value.trim();

    const product =
        document.getElementById("product")?.value;

    const quantity =
        document.getElementById("quantity")?.value.trim();

    const location =
        document.getElementById("location")?.value.trim();


    if (!name || !phone || !product || !quantity) {

        alert(
            "Please fill in your name, phone number, product and quantity."
        );

        return;
    }


    const message =

`Hello Golen Mixed Farm 👋

I would like to inquire about a farm product.

🌾 Product: ${product}
📦 Quantity: ${quantity}

👤 Name: ${name}
📞 Phone: ${phone}
📍 Location: ${location || "Not provided"}

Please send me the current price, availability and delivery information.

Thank you!`;


    const whatsappURL =
        "https://wa.me/" +
        GMF_WHATSAPP +
        "?text=" +
        encodeURIComponent(message);


    const messageBox =
        document.getElementById("message");


    if (messageBox) {

        messageBox.innerText =
            "Opening WhatsApp...";

    }


    window.location.href = whatsappURL;

}

function inquireProduct(productName) {

    const message =

`Hello Golen Mixed Farm 👋

I'm interested in:

🌾 Product: ${productName}

Please send me:

• Current price
• Availability
• Available quantities
• Delivery options

Thank you!`;


    const whatsappURL =
        "https://wa.me/" +
        GMF_WHATSAPP +
        "?text=" +
        encodeURIComponent(message);


    window.open(whatsappURL, "_blank");

}

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const params =
            new URLSearchParams(
                window.location.search
            );

        const product =
            params.get("product");

        const productSelect =
            document.getElementById("product");


        if (
            product &&
            productSelect
        ) {

            productSelect.value =
                product;

        }

    }
);
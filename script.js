```javascrip
// WhatsApp business number: country code + number, digits only
const WHATSAPP_NUMBER = "918378950555";

function openWhatsApp(message) {
  const url =
    "https://wa.me/" +
    WHATSAPP_NUMBER +
    "?text=" +
    encodeURIComponent(message);

  window.location.href = url;
}

document.addEventListener("DOMContentLoaded", function () {
  // Product order buttons
  document.querySelectorAll(".order-button").forEach(button => {
    button.addEventListener("click", function () {
      const product = this.dataset.product;
      const price = this.dataset.price;

      const message =
        `Hello Deveya Dairies! I'd like to order: ${product} (${price}). ` +
        "Please share availability and delivery details.";

      openWhatsApp(message);
    });
  });

  // General WhatsApp contact button
  const generalOrder = document.getElementById("general-order");

  if (generalOrder) {
    generalOrder.addEventListener("click", function (event) {
      event.preventDefault();

      openWhatsApp(
        "Hello Deveya Dairies! I'd like to enquire about your bouquets and gifts."
      );
    });
  }

  // Product filters
  document.querySelectorAll(".filter").forEach(button => {
    button.addEventListener("click", function () {
      document.querySelectorAll(".filter").forEach(item => {
        item.classList.remove("active");
      });

      this.classList.add("active");

      const filter = this.dataset.filter;

      document.querySelectorAll(".product-card").forEach(card => {
        card.style.display =
          filter === "all" || card.dataset.category === filter
            ? ""
            : "none";
      });
    });
  });

  // Copyright year
  const year = document.getElementById("year");

  if (year) {
    year.textContent = new Date().getFullYear();
  }
});
```

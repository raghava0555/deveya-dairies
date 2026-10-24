const WHATSAPP_NUMBER = "918378950555";

function openWhatsApp(message) {
  const url =
    "https://wa.me/" +
    WHATSAPP_NUMBER +
    "?text=" +
    encodeURIComponent(message);

  window.open(url, "_blank");
}

document.querySelectorAll(".order-button").forEach(function (button) {
  button.addEventListener("click", function () {
    const product = this.dataset.product;
    const price = this.dataset.price;

    const message =
      "Hello Deveya Dairies! I would like to order: " +
      product +
      " (" +
      price +
      "). Please share availability and delivery details.";

    openWhatsApp(message);
  });
});

const generalOrder = document.getElementById("general-order");

if (generalOrder) {
  generalOrder.addEventListener("click", function (event) {
    event.preventDefault();

    openWhatsApp(
      "Hello Deveya Dairies! I would like to enquire about your bouquets and gifts."
    );
  });
}

document.querySelectorAll(".filter").forEach(function (button) {
  button.addEventListener("click", function () {
    document.querySelectorAll(".filter").forEach(function (item) {
      item.classList.remove("active");
    });

    this.classList.add("active");

    const filter = this.dataset.filter;

    document.querySelectorAll(".product-card").forEach(function (card) {
      card.style.display =
        filter === "all" || card.dataset.category === filter
          ? ""
          : "none";
    });
  });
});

const year = document.getElementById("year");

if (year) {
  year.textContent = new Date().getFullYear();
}

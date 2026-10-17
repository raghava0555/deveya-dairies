// IMPORTANT: WhatsApp numbers must contain country code and digits only.
// Replace this with your business number if you need to change it.
const WHATSAPP_NUMBER = "918378950555";

function openWhatsApp(message) {
  const url = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(message);
  window.open(url, "_blank", "noopener,noreferrer");
}

document.querySelectorAll(".order-button").forEach(button => {
  button.addEventListener("click", () => {
    const product = button.dataset.product;
    const price = button.dataset.price;
    openWhatsApp(`Hello Deveya Dairies! I'd like to order: ${product} (${price}). Please share availability and delivery details.`);
  });
});

document.getElementById("general-order").addEventListener("click", event => {
  event.preventDefault();
  openWhatsApp("Hello Deveya Dairies! I'd like to enquire about your bouquets and gifts.");
});

document.querySelectorAll(".filter").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach(item => item.classList.remove("active"));
    button.classList.add("active");
    const filter = button.dataset.filter;
    document.querySelectorAll(".product-card").forEach(card => {
      card.style.display = filter === "all" || card.dataset.category === filter ? "" : "none";
    });
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

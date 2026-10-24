// Replace 918378950555 with your WhatsApp number including country code, without + or spaces.
const WHATSAPP_NUMBER = "918378950555";
const cart = [];
const cartText = document.getElementById("cart");
const checkout = document.getElementById("checkout");
function updateCart(){
  if(!cart.length){cartText.textContent="Your cart is empty. Add something lovely! ♡";checkout.textContent="Order Cart on WhatsApp →";return;}
  const count=cart.reduce((n,i)=>n+i.qty,0), total=cart.reduce((n,i)=>n+i.price*i.qty,0);
  cartText.textContent=`${count} item(s) in your cart • Total: ₹${total.toLocaleString("en-IN")}`;
  checkout.textContent=`Order ${count} item(s) • ₹${total.toLocaleString("en-IN")} on WhatsApp →`;
}
document.querySelectorAll(".add").forEach(btn=>btn.addEventListener("click",()=>{
  const item=cart.find(i=>i.name===btn.dataset.name);
  if(item)item.qty++;else cart.push({name:btn.dataset.name,price:Number(btn.dataset.price),qty:1});
  updateCart();const old=btn.textContent;btn.textContent="✓ Added";setTimeout(()=>btn.textContent=old,900);
}));
document.querySelectorAll(".heart").forEach(btn=>btn.addEventListener("click",()=>{btn.classList.toggle("saved");btn.textContent=btn.classList.contains("saved")?"♥":"♡";}));
function order(){
  if(WHATSAPP_NUMBER.includes("X")){alert("Please open script.js and replace 91XXXXXXXXXX with your WhatsApp number including country code.");return;}
  let lines=cart.length?cart.map(i=>`• ${i.name} × ${i.qty} — ₹${i.price*i.qty}`):["Hello! I'd like to ask about your bouquets and gifts."];
  const total=cart.reduce((n,i)=>n+i.price*i.qty,0);if(cart.length)lines.push(`\nTotal: ₹${total.toLocaleString("en-IN")}`);
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello Deveya Dairies! I'd like to place an order:\n"+lines.join("\n")+"\n\nPlease let me know delivery details.")}`,"_blank","noopener");
}
checkout.addEventListener("click",order);
document.getElementById("headerWA").addEventListener("click",order);
document.getElementById("floatingWA").addEventListener("click",order);
document.getElementById("menu").addEventListener("click",()=>document.getElementById("nav").classList.toggle("open"));
document.querySelectorAll("#nav a").forEach(a=>a.addEventListener("click",()=>document.getElementById("nav").classList.remove("open")));
document.getElementById("year").textContent=new Date().getFullYear();

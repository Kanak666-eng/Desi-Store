let cartCount = 0;
let cartTotal = 0;

const badge = document.getElementById("cart-badge");
const cartItemsList = document.getElementById("cart-items");
const cartTotalElement = document.getElementById("cart-total");
const emptyMsg = document.getElementById("empty-cart-msg");
const cartSidebar = document.getElementById("cart-sidebar");
const toast = document.getElementById("toast");

/* Toggle Cart */
function toggleCart() {
    cartSidebar.classList.toggle("translate-x-full");
}

/* Smooth Scroll */
function scrollToProducts() {
    document.getElementById("products").scrollIntoView({ behavior: "smooth" });
}

/* Add to Cart */
function addToCart(name, price) {
    cartCount++;
    cartTotal += price;

    badge.textContent = cartCount;
    cartTotalElement.textContent = cartTotal;

    emptyMsg.style.display = "none";

    const li = document.createElement("li");
    li.className = "p-3 bg-white border rounded mb-2 shadow-sm flex justify-between";
    li.innerHTML = `
        <span>${name}</span>
        <span class="text-brand font-bold">₹${price}</span>
    `;
    cartItemsList.appendChild(li);

    showToast(name + " added to cart!");
}

/* Toast */
function showToast(msg) {
    toast.textContent = msg;
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 2500);
}

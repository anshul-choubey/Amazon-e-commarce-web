// Initialize cart
let cart = [];

// Update the cart count and total
function updateCart() {
  const cartCount = document.getElementById("cart-count");
  const cartTotal = document.getElementById("cart-total");
  const cartItems = document.getElementById("cart-items");

  // Update cart item count
  cartCount.textContent = cart.length;

  // Calculate total price
  let total = 0;
  cartItems.innerHTML = "";
  cart.forEach((item) => {
    const itemElement = document.createElement("div");
    itemElement.classList.add("cart-item");
    itemElement.innerHTML = `${item.name} - $${item.price} <button class="remove-item" data-product="${item.id}">Remove</button>`;
    cartItems.appendChild(itemElement);
    total += parseFloat(item.price);
  });

  cartTotal.textContent = `$${total.toFixed(2)}`;
}

// Handle adding items to the cart
const addToCartButtons = document.querySelectorAll(".add-to-cart");
addToCartButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const product = {
      id: this.dataset.product,
      name: this.dataset.name,
      price: this.dataset.price,
    };
    cart.push(product);
    updateCart();
  });
});

// Handle removing items from the cart
document
  .getElementById("cart-items")
  .addEventListener("click", function (event) {
    if (event.target.classList.contains("remove-item")) {
      const productId = event.target.dataset.product;
      cart = cart.filter((item) => item.id !== productId);
      updateCart();
    }
  });

// Handle opening and closing the cart modal
const cartButton = document.getElementById("cart-button");
const cartModal = document.getElementById("cart-modal");
const closeCartButton = document.getElementById("close-cart");
const checkoutButton = document.getElementById("checkout-button");

cartButton.addEventListener("click", function () {
  cartModal.style.display = "flex";
});

closeCartButton.addEventListener("click", function () {
  cartModal.style.display = "none";
});

checkoutButton.addEventListener("click", function () {
  alert(
    "Checkout process is a simulation! (Add payment integration for production)"
  );
  cart = [];
  updateCart();
  cartModal.style.display = "none";
});

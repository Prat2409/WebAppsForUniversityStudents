// Add to Cart functionality
let addToCartButtons = document.querySelectorAll('.add-to-cart');

addToCartButtons.forEach(function(button) {
  button.addEventListener('click', addToCartClicked);
});

function addToCartClicked(event) {
  let button = event.target;
  let itemName = button.dataset.name;
  let itemPrice = button.dataset.price;
  addItemToCart(itemName, itemPrice);
  updateCartTotal();
}

function addItemToCart(itemName, itemPrice) {
  let cartRow = document.createElement('li');
  let cartItems = document.querySelector('.cart ul');
  let cartItemNames = cartItems.querySelectorAll('.cart-item-name');

  // Check if item is already in cart
  for (let i = 0; i < cartItemNames.length; i++) {
    if (cartItemNames[i].innerText === itemName) {
      alert('This item is already added to the cart');
      return;
    }
  }

  let cartRowContents = `
    <span class="cart-item-name">${itemName}</span>
    <span class="cart-item-price">${itemPrice}</span>
  `;
  cartRow.innerHTML = cartRowContents;
  cartItems.append(cartRow);
}

function updateCartTotal() {
  let cartItemPrices = document.querySelectorAll('.cart-item-price');
  let total = 0;

  cartItemPrices.forEach(function(price) {
    total += parseFloat(price.innerText.replace('$', ''));
  });

  document.querySelector('#total-price').innerText
}
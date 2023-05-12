let total = 0;

function addItem(price, canteenId) {
  total += price;
  document.getElementById('totalAmount').textContent = total;
  
  // You can add additional logic here, such as updating the cart or performing any other actions based on the added item.
}

function processPayment() {
  const paymentModal = document.getElementById('paymentModal');
  paymentModal.style.display = 'block';
}

function closePaymentModal() {
  const paymentModal = document.getElementById('paymentModal');
  paymentModal.style.display = 'none';
}
function showQRCode() {
  const qrCodeOverlay = document.getElementById('qrCodeOverlay');
  qrCodeOverlay.classList.add('show');
}


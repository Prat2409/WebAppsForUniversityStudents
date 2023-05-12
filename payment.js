var qrCode = new QRCode("qrCode");

function generateQRCode(text) {
    qrCode.makeCode(text);
}

function scanQRCode() {
    // Logic to handle QR code scanning using a QR code scanning library
    // For simplicity, we'll assume the scanning process is successful and get the payment details
    var paymentDetails = "Payment successful! Amount: $50";
    showPaymentStatus(paymentDetails);
}

function showPaymentStatus(paymentDetails) {
    var paymentStatusElement = document.getElementById("paymentStatus");
    paymentStatusElement.textContent = paymentDetails;
    paymentStatusElement.classList.add("success");
}

// Generate the payment details and display as QR code when the page loads
document.addEventListener("DOMContentLoaded", function() {
    var paymentDetails = "Amount: $50";
    generateQRCode(paymentDetails);
});

/// Sample js file for demo purposes
/// Remember to always export your functions
/// so that they can be used in other files
export function startPayment() {
  const paymentButton = document.getElementById("paymentButton");
  const buttonText = document.getElementById("buttonText");
  const loadingSpinner = document.getElementById("loadingSpinner");

  paymentButton.disabled = true;
  buttonText.style.display = "none";
  loadingSpinner.style.display = "inline";

  setTimeout(function() {
    buttonText.style.display = "inline";
    loadingSpinner.style.display = "none";
    buttonText.innerHTML = "Payment successful!";
  }, 3000);

  setTimeout(function() {
    paymentButton.disabled = false;
    buttonText.innerHTML = "Proceed to Payment";
  }, 6000);
}

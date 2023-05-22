/// Sample js file for demo purposes
/// Remember to always export your functions
/// so that they can be used in other files

export function startPayment() {
  const containerElement = document.querySelector('.component-container');

  const loaderContainer = document.createElement("div");
  loaderContainer.classList.add("loader-container");

  var paymentButton = document.getElementById("paymentButton");
  var loader = document.createElement("div");
  loader.id = "loader";

  const loaderElement = document.createElement("div");
  loaderElement.classList.add("loader");

  loaderContainer.appendChild(loaderElement);
  containerElement.insertAdjacentElement("afterend", loaderContainer);

  containerElement.style.visibility = 'hidden';

  setTimeout(function() {
    loaderContainer.remove();
    containerElement.style.visibility = 'visible';
    paymentButton.innerHTML = "Payment successful!";
  }, 3000);

  setTimeout(function() {
    paymentButton.innerHTML = "Proceed to Payment";
  }, 6000);
}

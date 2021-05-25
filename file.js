var likeButtons = document.querySelectorAll(".like-btn");
var miusButtons = document.querySelectorAll(".minus-btn");
var plusButtons = document.querySelectorAll(".plus-btn");
var pricesItems = document.querySelectorAll(".total-price");
var totalPrice = document.querySelector("#total");
var deleButtons = document.querySelectorAll(".delete-btn");

//like items
for (var i = 0; i < likeButtons.length; i++) {
  likeButtons[i].addEventListener("click", function () {
    this.classList.toggle("is-active");
    console.log(this);
  });
}
//deccrease items
for (var i = 0; i < miusButtons.length; i++) {
  miusButtons[i].addEventListener("click", function (event) {
    event.preventDefault();
    var valueInput = "";
    if (event.target.nodeName === "IMG") {
      valueInput = event.target.parentElement.previousElementSibling;
      var priceOfitem =
        event.target.parentElement.parentElement.nextElementSibling
          .nextElementSibling;

      var subtotalItem =
        event.target.parentElement.parentElement.nextElementSibling;

      var value = parseInt(valueInput.value);
      if (value > 1) {
        value = value - 1;
        totalPrice.textContent =
          "$" +
          (parseInt(totalPrice.textContent.replace("$", "")) -
            parseInt(priceOfitem.textContent.replace("$", "")));
      }
      valueInput.setAttribute("value", value);

      subtotalItem.textContent =
        "$" + value * parseInt(priceOfitem.textContent.replace("$", ""));
    }
  });
}
//increase items

for (var i = 0; i < plusButtons.length; i++) {
  plusButtons[i].addEventListener("click", function (event) {
    var valueInput = "";
    event.preventDefault();
    if (event.target.nodeName === "IMG") {
      valueInput = event.target.parentElement.nextElementSibling;

      var priceOfitem =
        event.target.parentElement.parentElement.nextElementSibling
          .nextElementSibling;
      console.log(priceOfitem.textContent);
      var subtotalItem =
        event.target.parentElement.parentElement.nextElementSibling;
      /*
       */
      var value = parseInt(valueInput.value);
      if (value >= 1) {
        value = value + 1;
      }

      valueInput.setAttribute("value", value);
      subtotalItem.textContent =
        "$" + value * parseInt(priceOfitem.textContent.replace("$", ""));
      totalPrice.textContent =
        "$" +
        (parseInt(totalPrice.textContent.replace("$", "")) +
          parseInt(priceOfitem.textContent.replace("$", "")));
    }
  });
}
//total
for (var i = 0; i < deleButtons.length; i++) {
  deleButtons[i].addEventListener("click", function (event) {
    var subTotal =
      event.target.parentElement.parentElement.parentElement.getElementsByClassName(
        "subtotal"
      )[0];
    totalPrice.textContent =
      "$" +
      (parseInt(totalPrice.textContent.replace("$", "")) -
        parseInt(subTotal.textContent.replace("$", "")));
    event.target.parentElement.parentElement.parentElement.remove();
  });
}

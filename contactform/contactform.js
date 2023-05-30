function validateForm() {
  var x = document.forms["myForm"]["firstName"].value;
  var y = document.forms["myForm"]["lastName"].value;
  var element1 = document.getElementById("firstName");
  var element2 = document.getElementById("lastName");

  if (x === "" && y === "") {
    element1.classList.add("invalid");
    element2.classList.add("invalid");
  } else if (x === "") {
    element1.classList.add("invalid");
    element2.classList.remove("invalid");
  } else if (y === "") {
    element1.classList.remove("invalid");
    element2.classList.add("invalid");
  } else {
    element1.classList.remove("invalid");
    element2.classList.remove("invalid");
  }
}

function removeInvalidClass(element) {
  element.classList.remove("invalid");
}

document.getElementById("firstName").addEventListener("input", function () {
  removeInvalidClass(this);
});

document.getElementById("lastName").addEventListener("input", function () {
  removeInvalidClass(this);
});

function submitForm() {
  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var confirmationBanner = document.getElementById("confirmationBanner");

  if (firstName !== "" && lastName !== "") {
    confirmationBanner.style.display = "block";
    confirmationBanner.textContent =
      "Thank you for contacting us, " + firstName;
    console.log("Form submitted successfully!");
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
  } else {
    confirmationBanner.style.display = "none";
  }

  document.getElementById("myForm").reset();
}

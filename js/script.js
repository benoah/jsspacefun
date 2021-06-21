const baseUrl = "https://api.spacexdata.com/v3/";
const rocketsUrl = `${baseUrl}rockets/`;

// the function must be marked as async
async function fetchRockets() {
  try {
    // use await when calling fetch
    const response = await fetch(rocketsUrl);
    // use await when resolving the returned value, which is a promise
    const rocket = await response.json();
    // pass the array of elephants to the displayElephants function
    displayRockets(rocket);
    createDetails(rocket);
  } catch (error) {
    console.log(error);
  }
}
fetchRockets();

function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function createDetails(details) {
  console.log(details);

  const paraIntro = document.querySelector(".description");
  paraIntro.innerHTML = details[1].description;

  const heading = document.querySelectocardr("h1");
  heading.innerText = details[0].company;

  const headingTwo = document.querySelector("h2");
  headingTwo.innerText = details[1].rocket_name;

  const smallImg = document.querySelector(".detailImage");
  smallImg.src = details[1].flickr_images[0];
  smallImg.alt = details[1].rocket_name;
}

function displayRockets(rocket) {
  const rocketContainer = document.querySelector(".grid");
  // declare a vairable to hold the HTML we will create
  let html = "";
  // loop through each using a for loop
  for (let i = 0; i < rocket.length; i++) {
    // console.log(rocket[i].rocket_name);

    if (!rocket[i].rocket_name) {
      // continue will skip the remaining code and return to the top of the loop
      continue;
    }
    // add the new HTML string to the existing HTML string
    html += `<div class = "flex">
   <img class = "designImage" src="${rocket[i].flickr_images}" alt="">
   <div class ="sameLine">
   <p>${rocket[i].rocket_name}</p>
   <p> <a href="details.html?rocket_name=${rocket[i].rocket_id}">Links..</a><p>
   </div>
  </div>`;
  }
  // assign the new HTML string to the innerHTML property of Container
  rocketContainer.innerHTML = html;
}






function toggleClass() {
  var element = document.getElementById("contact");
  element.classList.toggle("active");
}

const form = document.querySelector("#contactForm");

form.addEventListener("submit", validateForm);

function validateForm(event) {
  event.preventDefault();
  console.log("The form was submitted");

  const firstName = document.querySelector("#firstName");
  const firstNameError = document.querySelector("#firstNameError");
  const firstNameValue = firstName.value;

  if (checkInputLength(firstNameValue) === true) {
    firstNameError.style.display = "none";
  } else {
    firstNameError.style.display = "block";
  }

  const lastName = document.querySelector("#lastName");
  const lastNameError = document.querySelector("#lastNameError");
  const lastNameValue = lastName.value;

  if (checkInputLength(lastNameValue) === true) {
    lastNameError.style.display = "none";
  } else {
    lastNameError.style.display = "block";
  }

  const email = document.querySelector("#email");
  const emailError = document.querySelector("#emailError");
  const invalidEmailError = document.querySelector("#invalidEmailError");
  const emailValue = email.value;

  if (checkInputLength(emailValue) === true) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }

  if (validateEmail(emailValue) === true) {
    invalidEmailError.style.display = "none";
  } else {
    invalidEmailError.style.display = "block";
  }

  function checkInputLength(value) {
    // trim the value
    const trimmedValue = value.trim();

    // if the value's length is greater than 0 return true
    if (trimmedValue.length > 0) {
      return true;
    } else {
      return false;
    }
  }

  function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    return regEx.test(email);
  }
}

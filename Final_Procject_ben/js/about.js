const aboutUrl = "https://api.spacexdata.com/v3/info";

fetch(aboutUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (json) {
    createTabel(json);
  })
  .catch(function (json) {});



/*--------------------------------------------------------------
# This code is a copy from w3school on how to make a hamburger menu 
--------------------------------------------------------------*/
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function createTabel(about) {
  console.log(about);
  const address = document.querySelector("h1");
  address.innerText = about.summary;

  const Aboutheading = document.querySelector("h1");
  Aboutheading.innerText = about.summary;

  factFounded = document.querySelector(".year");
  factFounded.innerText = about.founded;

  factNrvehicals = document.querySelector(".vehiclesnr");
  factNrvehicals.innerText = about.vehicles;

  factFounder = document.querySelector(".founderPr");
  factFounder.innerText = about.founder;

  factEmplo = document.querySelector(".employeesNR");
  factEmplo.innerText = about.employees;
}

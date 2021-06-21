// get the name parameter from the querystring
// get the query string
const queryString = document.location.search;
// console.log(queryString);

const params = new URLSearchParams(queryString);

let id;

if (params.has("rocket_name")) {
  id = params.get("rocket_name");
} else {
  document.location.href = "/";
}


const baseUrl = "https://api.spacexdata.com/v3/rockets/" + id;

fetch(baseUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (json) {
    createDetails(json);
  })
  .catch(function (error) {
    console.dir(error);
  });



function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}



function createDetails(data) {


    console.log(data);

    const container = document.querySelector(".containerDetail");
  
    const heading = document.createElement("h1");
    heading.innerText = data.rocket_name;
    container.appendChild(heading);
  
    const description = document.createElement("div");
    description.className = "details-description";
    description.innerHTML = data.description;
    container.appendChild(description);
  
    const firstFly = document.createElement("firstfly");
    firstFly.className = "firstfly";
    firstFly.innerText =`
    First Fly:${data.first_flight}
    Height: ${data.height.meters} Meters
    Cost pr launch: ${data.cost_per_launch} $
    Mass: ${data.mass.kg} Kg
  `;
    container.appendChild(firstFly);
  
    var img = new Image();
    img.className = "imageDetail";
    img.src = data.flickr_images[1];
    container.appendChild(img);

}



const baseUrl = "https://api.spacexdata.com/v3/launches";

fetch(baseUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (json) {
    // console.log(json);
    const rockets = json;
    cardHolderLaunches(rockets);
  })
  .catch(function () {});

function cardHolderLaunches(card) {
  const cardPlacer = document.querySelector(".boxForlaunches");

  let box = "";

  card.forEach(function (results) {
    console.log(results);

    let details = "secret";

    if (results.details != "" && results.details != undefined) {
      details = results.details;
    }

    const time = results.launch_date_unix;
    const date = new Date(time * 1000);
    const format =
      ("0" + date.getDate()).slice(-2) +
      " - " +
      ("0" + (date.getMonth() + 1)).slice(-2) +
      " - " +
      date.getFullYear();

    box += `
        
        <div id="timeline-content">
       
        <ul class="timeline">  
      <li class="event" data-date="${results.launch_year}">
      
    
      <h3>${results.mission_name}</h3>
      <p>"${details}" </p>    
      <p>Rocket Name:${results.rocket.rocket_name}<p>
      <p>Rocket type:${results.rocket.rocket_type}<p>
    </li>
        </ul>
        </div>`;
  });

  cardPlacer.innerHTML = box;
}


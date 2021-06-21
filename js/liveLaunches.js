const baseUrl = "https://api.spacexdata.com/v3/launches/upcoming";

fetch(baseUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (json) {
    // console.log(json);
    futureLaunches(json);
  })
  .catch(function () {});



  function futureLaunches(json) {
    
    console.dir(json)

    const cardlaunch = document.querySelector(".livelaunches");
    

    
    json.forEach(function (launch) {


         const time = launch.launch_date_unix;
        const date = new Date(time * 1000);
        const format = ('0' + date.getDate()).slice(-2) + ' - ' + ('0' + (date.getMonth() + 1)).slice(-2) + ' - ' + date.getFullYear();
      

const payload = "undefine"

if (launch.rocket.second_stage.payloads[0].payloads_mass_kg == null){
    launch.rocket.second_stage.payloads[0].payloads_mass_kg = payload;
}

let html = "";

html += `

<div id="timeline-content">
<ul class="timeline">  
<li class="event" data-date="${format}">
<h3>${launch.mission_name}</h3>
<p>Rocket Name:${launch.rocket.rocket_name}<p>
<p>PayLoad:${launch.rocket.second_stage.payloads[0].payload_type} <p>
<p>Kilo:${launch.rocket.second_stage.payloads[0].payloads_mass_kg}<p>
</li>
</ul>
</div>`;
cardlaunch.innerHTML += html;
});


}
    


const load = document.querySelector("#loader");
container.removeChild(load);

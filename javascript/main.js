// ASSEGNO API FORNITA AD UNA CONSTANTE

const apiExercise = "https://lanciweb.github.io/demo/api/pictures/";
console.log(apiExercise);

// verifico funzionamento tramite console log e vedo cosa mi manda indietro

// axios.get(apiExercise).then((response) => {
//   console.log(response);
// });

// ottengono un array di oggetti

// mi creo un ciclo for

axios.get(apiExercise).then((response) => {
  console.log(response.data);

  for (let i = 0; i < response.data.length; i++) {
    elementCol16.innerHTML += `<div class="col1-6">
            <div class="card" id="card-${response.data[i].id}">
              <div class="card-container">
                <img class="point-attack" src="./img/pin.svg" alt="" />
                <img
                  class="img-card"
                  src="${response.data[i].url}"
                  alt="${response.data[i].title}"
                />
                <div class="info-card">
                  <h3 class="data-card">${response.data[i].date}</h3>
                  <h3 class="name-card">${response.data[i].title}</h3>                  
                </div>
              </div>
            </div>
          </div>`;
  }
  // mi serve recuperare la parte delle card una volta finito il ciclo FOR
  let elementCard = document.querySelectorAll(".card");
  console.log(elementCard);

  // Faccio CICLO FOR per CREARE EVENTO PER CLICK IMG SELEZIONATA
  for (let i = 0; i < elementCard.length; i++) {
    elementCard[i].addEventListener("click", function () {
      elementOverlay.classList.remove("off");
      console.log(elementCard[i].id);
      const originalImgSrc = document.querySelector(
        `#${elementCard[i].id} .img-card`
      ).src;
      document.querySelector(".card-overlay-img img").src = originalImgSrc;
    });
  }
});

// mi serve recuperare la sezione della colonna per riprodurla

const elementCol16 = document.querySelector(".row");
console.log(elementCol16);

// OVERLAY

// mi serve recuperare la parte del OVERLAY
const elementOverlay = document.querySelector(".overlay");
console.log(elementOverlay);

// mi serve recuperare la parte del BOTTONE del OVERLAY
const elementBtnOverlay = document.getElementById("btn-overlay");
console.log(elementBtnOverlay);

// CREO EVENTO PER CLICK BTN OVERLAY
elementBtnOverlay.addEventListener("click", function () {
  elementOverlay.classList.add("off");
});

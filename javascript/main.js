// ASSEGNO API FORNITA AD UNA CONSTANTE

const apiExercise = "https://lanciweb.github.io/demo/api/pictures/";
console.log(apiExercise);

// verifico funzionamento tramite console log e vedo cosa mi manda indietro

// axios.get(apiExercise).then((response) => {
//   console.log(response);
// });

// ottengono un array di oggetti

// mi creo un array vuoto che andrò a riempire attraverso un ciclo for

let currentArray = [];
console.log(currentArray);

// for (let i = 0; i < 6; i++) {
//   axios.get(apiExercise).then((response) => {
//     console.log(response);
//   });
//   currentArray.push(response.data);

//   if (currentArray.length === response.length) {
//   }
// }

// mi serve recuperare la sezione della colonna per riprodurla

const elementCol16 = document.querySelector(".row");
console.log(elementCol16);

elementCol16.innerHTML = `<div class="col1-6">
            <div class="card">
              <div id="card-container">
                <img id="point-attack" src="./img/pin.svg" alt="" />
                <img
                  id="img-card"
                  src="https://marcolanci.it/boolean/assets/pictures/1.png"
                  alt="foto-ricordo"
                />
                <div class="info-card">
                  <h3 id="name-card">ciao</h3>
                  <p id="info-card">Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
            </div>
          </div>`;

// ASSEGNO API FORNITA AD UNA CONSTANTE

const apiExercise = "https://lanciweb.github.io/demo/api/pictures/";
console.log(apiExercise);

// verifico funzionamento tramite console log e vedo cosa mi manda indietro

// axios.get(apiExercise).then((response) => {
//   console.log(response);
// });

// ottengono un array di oggetti

// mi creo un array vuoto che andrò a riempire attraverso un ciclo for

axios.get(apiExercise).then((response) => {
  console.log(response.data);

  for (let i = 0; i < response.data.length; i++) {
    elementCol16.innerHTML += `<div class="col1-6">
            <div class="card">
              <div class="card-container">
                <img class="point-attack" src="./img/pin.svg" alt="" />
                <img
                  class="img-card"
                  src="${response.data[i].url}"
                  alt="${response.data[i].title}"
                />
                <div class="info-card">
                  <h3 class="name-card">${response.data[i].title}</h3>
                  <p class="data-card">${response.data[i].date}</p>
                </div>
              </div>
            </div>
          </div>`;
  }
});

// mi serve recuperare la sezione della colonna per riprodurla

const elementCol16 = document.querySelector(".row");
console.log(elementCol16);

const breeds = document.querySelector(".breeds");

function getDogBreeds() {
  const allBreedsApiUrl = "https://dog.ceo/api/breeds/list/all";

  fetch(allBreedsApiUrl)
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      parseJsonResponse(json);
    })
    .catch((error) => {
      console.log(error);
    });
}

function parseJsonResponse(json) {
  let allBreedsData = json.message;
  let breedsList = Object.keys(allBreedsData);

  breeds.innerHTML = "";

  breedsList.forEach(breed => {
    let listItemHtml = `<li> ${breed} </li>`;
    breeds.innerHTML += listItemHtml;
  });
}

getDogBreeds();

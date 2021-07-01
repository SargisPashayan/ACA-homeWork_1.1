const ul_breeds = document.querySelector("#ul_breeds");

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

  //ul_breeds.innerHTML="";
  breedsList.forEach((breed) => {
    let listItemHtml = `<li>${breed}</li>`;
    ul_breeds.innerHTML += listItemHtml;
  });
}

getDogBreeds();

const img_container = document.querySelector("#img_container");

function getDogImages(breedName) {
  const dogImagesUrl = `https://dog.ceo/api/breed/${breedName}/images`;

  fetch(dogImagesUrl)
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      showImagesInHtml(json);
    })
    .catch((error) => {
      console.log(error);
    });
}

function showImagesInHtml(json) {
  let imageList = json.message;

  img_container.innerHTML = "";
  imageList.forEach((image) => {
    img_container.innerHTML += `<img class="gridItem" src="${image}"></img>`;
  });
}

ul_breeds.addEventListener("click", (e) => {
  if (e.target && e.target.nodeName == "LI") {
    getDogImages(e.target.innerHTML.trim());
  }
});

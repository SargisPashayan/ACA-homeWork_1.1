const randomImage = document.getElementById("randomImage");

function getRandomImage() {
    const url = "https://dog.ceo/api/breeds/image/random";

    fetch(url)
    .then(response => response.json())
    .then(json => {
        console.log(json);

        let imageUrl = json.message;
        randomImage.src = imageUrl;
    })
    .catch(error => {
        console.log(error)
    })
}

getRandomImage();

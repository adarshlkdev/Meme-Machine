const generateMemeBtn = document.querySelector(".meme-machine .generate-meme-btn");

const memeImage = document.querySelector(".meme-machine img");

const memeTitle = document.querySelector(".meme-machine .meme-title");

const memeAuthor = document.querySelector(".meme-machine .meme-author");

const updateDetails = (url , title , author) =>{
    memeImage.setAttribute("src" , url );
    memeTitle.innerHTML = title;
    memeAuthor.innerHTML = `Meme By : ${author}`;
}

const generateMeme = () =>{
   fetch("https://meme-api.com/gimme")
   .then(response =>  response.json()).then(data => {
        updateDetails(data.url , data.title , data.author)
   });
};

generateMemeBtn.addEventListener("click" , generateMeme);

generateMeme();
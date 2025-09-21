import axios from 'axios';

import './css/comon.css';

const API_KEY = "43173775-fc7269b10cca3a5d436001063";

const form = document.querySelector(".form");
const gallery = document.querySelector(".gallery")


form.addEventListener("submit", handlerSubmit);

function handlerSubmit(event) {
    event.preventDefault();
    gallery.innerHTML = "";
    const searchResulr = event.target.elements['search-text'].value.trim();


    if(searchResulr === "") {
        alert("You are valyanok")
        return;
    }
    
    axios("https://pixabay.com/api/", {
        params: {
            key: API_KEY,
            q: searchResulr,
            image_type: "photo",
            orientation: "horizontal",
            safesearch: true
        }
    })
        .then((res) => {
            console.log(res);
            gallery.insertAdjacentHTML("beforeend", createMarkUp(res.data.hits))
            
        })
        .catch((error) => {
            console.log(error);
            
        })


        form.reset()
    

    
}


function createMarkUp(arr) {
    return arr.map(({ previewURL, likes, views, comments, downloads }) => `
        <li class="photo-card">
            <img src="${previewURL}" height="" weight=""/>
             <div class="photo-info-labels">
                <span>Likes</span>
                <span>Views</span>
                <span>Comments</span>
                <span>Downloads</span>
            </div>

            <div class="photo-info-values">
                <span>${likes}</span>
                <span>${views}</span>
                <span>${comments}</span>
                <span>${downloads}</span>
            </div>
            
        </li>
        `).join("")
}
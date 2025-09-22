import axios from 'axios';
import './css/comon.css';

// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";


const API_KEY = "52413922-df6c611514e1fbd211f3ba691";

const form = document.querySelector(".form");
const gallery = document.querySelector(".gallery")

let lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});


form.addEventListener("submit", handlerSubmit);

function handlerSubmit(event) {
    event.preventDefault();
    gallery.innerHTML = "";
    const searchResulr = event.target.elements['search-text'].value.trim();


    if(searchResulr === "") {
        iziToast.error(
        {
          message: "Sorry, you didn’t enter any value!",
          position: 'topRight',
          backgroundColor: '#EF4040',
          messageColor: '#ffffff',
        })
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
            if(res.data.hits.length === 0) {
                iziToast.error(
                {
                message: "Sorry, there are no images matching your search query. Please try again!",
                position: 'topRight',
                backgroundColor: '#EF4040',
                messageColor: '#ffffff',
                })
            }
                       
            console.log(res);
            gallery.insertAdjacentHTML("beforeend", createMarkUp(res.data.hits));
            lightbox.refresh();
            
        })
        .catch((error) => {
            console.log(error);
            
            
        })


        form.reset()
    

    
}


function createMarkUp(arr) {
    return arr.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => `
        <li class="photo-card">
            <a href="${largeImageURL}">
            <img src="${webformatURL}" alt="${tags}" height="200" width="360" class="img-card"/>
             </a>
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



    

import './css/comon.css';

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import getImagesByQuery from "./js/pixabay-api";
import { createGallery, clearGallery, showLoader, hideLoader } from "./js/render-functions";


const form = document.querySelector(".form");


form.addEventListener("submit", handlerSubmit);

function handlerSubmit(event) {
    event.preventDefault();
    clearGallery();
    const searchResult = event.target.elements['search-text'].value.trim();

    if(searchResult === "") {
        iziToast.error(
        {
          message: "Sorry, you didn’t enter any value!",
          position: 'topRight',
          backgroundColor: '#EF4040',
          messageColor: '#ffffff',
            })
        form.reset();
        return;
    }

    showLoader();
    
    getImagesByQuery(searchResult)
        .then((data) => {
           
            if(data.hits.length === 0) {
                iziToast.error(
                {
                message: "Sorry, there are no images matching your search query. Please try again!",
                position: 'topRight',
                backgroundColor: '#EF4040',
                messageColor: '#ffffff',
                    })
                return;
            }       
            createGallery(data.hits);
        })
        .catch((error) => {
            console.log(error);     
        })
        .finally(() => {            
            hideLoader();
        })
    
        form.reset()   
}


    

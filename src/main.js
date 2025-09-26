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

    if (searchResult === "") {
        showToast("Sorry, you didn’t enter any value!");
        form.reset();
        return;
    }

    showLoader();
    
    getImagesByQuery(searchResult)
        .then((data) => {
           
            if (data.hits.length === 0) {
                showToast("Sorry, there are no images matching your search query. Please try again!");
                return;
            }       
            createGallery(data.hits);
        })
        .catch((error) => {
            showToast(`EROR, ${error}`);
            console.log(error);     
        })
        .finally(() => {            
            hideLoader();
        })
    
        form.reset()   
}

function showToast(message, ) {
    iziToast.error({
        message,
        position: 'topRight',
        backgroundColor: '#EF4040',
        messageColor: '#ffffff',
    });
}
    

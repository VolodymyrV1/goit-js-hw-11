import axios from 'axios';


const API_KEY = "52413922-df6c611514e1fbd211f3ba691";


// Ця функція повинна приймати один параметр query (пошукове слово, яке є рядком), здійснювати HTTP-запит і повертати значення властивості data з отриманої відповіді.

export default function getImagesByQuery(query) {
    return axios("https://pixabay.com/api/", {
        params: {
            key: API_KEY,
            q: query,
            image_type: "photo",
            orientation: "horizontal",
            safesearch: true
        }
    })
    .then(res => res.data);
    
}
import{a as f,S as p,i as m}from"./assets/vendor-BSTwZ_tR.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const h="52413922-df6c611514e1fbd211f3ba691";function y(r){return f("https://pixabay.com/api/",{params:{key:h,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(s=>s.data)}let g=new p(".gallery a",{captionsData:"alt",captionDelay:250});function v(r){const s=document.querySelector(".gallery"),a=r.map(({webformatURL:n,largeImageURL:e,tags:t,likes:o,views:c,comments:u,downloads:d})=>`
            <li class="photo-card">
                <a href="${e}">
                    <img src="${n}" alt="${t}"  class="img-card"/>
                </a>
                <div class="photo-info">
                    <div class="info-item">
                        <span class="label">Likes</span>
                        <span class="value">${o}</span>
                    </div>
                    <div class="info-item">
                        <span class="label">Views</span>
                        <span class="value">${c}</span>
                    </div>
                    <div class="info-item">
                        <span class="label">Comments</span>
                        <span class="value">${u}</span>
                    </div>
                    <div class="info-item">
                        <span class="label">Downloads</span>
                        <span class="value">${d}</span>
                    </div>
                </div>          
            </li>
            `).join("");s.insertAdjacentHTML("beforeend",a),g.refresh()}function b(){document.querySelector(".gallery").innerHTML=""}function L(){document.querySelector(".loader").classList.remove("hidden")}function S(){document.querySelector(".loader").classList.add("hidden")}const l=document.querySelector(".form");l.addEventListener("submit",q);function q(r){r.preventDefault(),b();const s=r.target.elements["search-text"].value.trim();if(s===""){i("Sorry, you didn’t enter any value!"),l.reset();return}L(),y(s).then(a=>{if(a.hits.length===0){i("Sorry, there are no images matching your search query. Please try again!");return}v(a.hits)}).catch(a=>{i(`EROR, ${a}`),console.log(a)}).finally(()=>{S()}),l.reset()}function i(r){m.error({message:r,position:"topRight",backgroundColor:"#EF4040",messageColor:"#ffffff"})}
//# sourceMappingURL=index.js.map

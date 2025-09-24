import{a as f,S as p,i as l}from"./assets/vendor-BSTwZ_tR.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const m="52413922-df6c611514e1fbd211f3ba691";function h(o){return f("https://pixabay.com/api/",{params:{key:m,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data)}let y=new p(".gallery a",{captionsData:"alt",captionDelay:250});function g(o){const r=document.querySelector(".gallery"),s=o.map(({webformatURL:n,largeImageURL:e,tags:t,likes:a,views:c,comments:u,downloads:d})=>`
            <li class="photo-card">
                <a href="${e}">
                    <img src="${n}" alt="${t}"  class="img-card"/>
                </a>
                <div class="photo-info">
                    <div class="info-item">
                        <span class="label">Likes</span>
                        <span class="value">${a}</span>
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
            `).join("");r.insertAdjacentHTML("beforeend",s),y.refresh()}function v(){document.querySelector(".gallery").innerHTML=""}function b(){document.querySelector(".loader").classList.remove("hidden")}function L(){document.querySelector(".loader").classList.add("hidden")}const i=document.querySelector(".form");i.addEventListener("submit",S);function S(o){o.preventDefault(),v();const r=o.target.elements["search-text"].value.trim();if(r===""){l.error({message:"Sorry, you didn’t enter any value!",position:"topRight",backgroundColor:"#EF4040",messageColor:"#ffffff"}),i.reset();return}b(),h(r).then(s=>{if(s.hits.length===0){l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#EF4040",messageColor:"#ffffff"});return}g(s.hits)}).catch(s=>{console.log(s)}).finally(()=>{L()}),i.reset()}
//# sourceMappingURL=index.js.map

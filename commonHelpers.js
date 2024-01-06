import{i as p,S as d}from"./assets/vendor-46aac873.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const a of e.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function s(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerpolicy&&(e.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?e.credentials="include":t.crossorigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function r(t){if(t.ep)return;t.ep=!0;const e=s(t);fetch(t.href,e)}})();const l=document.querySelector(".search-form");document.querySelector(".search-form-btn");const f=document.querySelector(".search-input"),c=document.querySelector(".gallery"),m=document.querySelector(".loader"),u=()=>m.classList.add("active"),n=()=>m.classList.remove("active"),g=()=>{const o=f.value,s=`https://pixabay.com/api/?${new URLSearchParams({key:"41640115-31701c1b62cbb4a16b6499d34",q:`${o}`,image_type:"photo",orientation:"horizontal",safesearch:!0})}`;u(),fetch(s).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()}).then(({hits:r})=>{n(),r.length===0?p.error({message:"Sorry, there are no images matching your search query. Please try again!"}):c.innerHTML=r.map(e=>`
              
              <li class="gallery-item">
                <a class="gallery-link" href=${e.largeImageURL}>
                    <img
                      class="gallery-image"
                      src=${e.webformatURL}
                      alt=${e.tags}
                    />
                  
                  <div class="img-info-wrapper">
                    <div class="img-part-info-wrapper">
                    <h3 class="img-info-title">Likes</h3>
                      <p class="img-info">${e.likes}</p>
                    </div>
  
                    <div class="img-part-info-wrapper">
                    <h3 class="img-info-title">Views</h3>
                      <p class="img-info">${e.views}</p>
                    </div>
  
                    <div class="img-part-info-wrapper">
                    <h3 class="img-info-title">Comments</h3>
                      <p class="img-info">${e.comments}</p>
                    </div>
  
                    <div class="img-part-info-wrapper">
                    <h3 class="img-info-title">Downloads</h3>
                      <p class="img-info">${e.downloads}</p>
                    </div>
                  </div>
              </a>
            </li>
            `).join(""),new d(".gallery a",{captionDelay:250,captionType:"attr",captionsData:"alt",position:"topRight"}).refresh()}).catch(r=>{console.log(r),n()})},h=o=>{o.preventDefault(),c.innerHTML="",g(),l.reset()};l.addEventListener("submit",h);
//# sourceMappingURL=commonHelpers.js.map

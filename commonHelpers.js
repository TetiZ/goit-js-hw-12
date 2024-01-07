import{a as p,i as d,S as f}from"./assets/vendor-89feecc5.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const a of e.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function i(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerpolicy&&(e.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?e.credentials="include":t.crossorigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function o(t){if(t.ep)return;t.ep=!0;const e=i(t);fetch(t.href,e)}})();const l=document.querySelector(".search-form"),u=document.querySelector(".search-input"),c=document.querySelector(".gallery"),m=document.querySelector(".loader"),g=()=>m.classList.add("active"),n=()=>m.classList.remove("active");document.querySelector(".load-more-btn");const y=()=>{const r=u.value,i=`https://pixabay.com/api/?${new URLSearchParams({key:"41640115-31701c1b62cbb4a16b6499d34",q:`${r}`,image_type:"photo",orientation:"horizontal",safesearch:!0})}`;g(),p.get(i).then(({hits:o})=>{n(),o.length===0?d.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):c.innerHTML=o.map(e=>`
              
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
            `).join(""),new f(".gallery a",{captionDelay:250,captionType:"attr",captionsData:"alt"}).refresh()}).catch(o=>{console.log(o),n()})},h=r=>{r.preventDefault(),c.innerHTML="",y(),l.reset()};l.addEventListener("submit",h);
//# sourceMappingURL=commonHelpers.js.map

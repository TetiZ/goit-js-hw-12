import{a as v,i as p,S as L}from"./assets/vendor-89feecc5.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const l=document.querySelector(".search-form"),w=document.querySelector(".search-input"),u=document.querySelector(".gallery"),b="41640115-31701c1b62cbb4a16b6499d34",S="https://pixabay.com/api/",f=document.querySelector(".loader"),y=()=>f.classList.add("active"),g=()=>f.classList.remove("active"),I=o=>{const t=o.map(a=>`
              <li class="gallery-item">
                <a class="gallery-link" href=${a.largeImageURL}>
                    <img
                      class="gallery-image"
                      src=${a.webformatURL}
                      alt="${a.tags}"
                    />
                  
                  <div class="img-info-wrapper">
                    <div class="img-part-info-wrapper">
                    <h3 class="img-info-title">Likes</h3>
                      <p class="img-info">${a.likes}</p>
                    </div>
  
                    <div class="img-part-info-wrapper">
                    <h3 class="img-info-title">Views</h3>
                      <p class="img-info">${a.views}</p>
                    </div>
  
                    <div class="img-part-info-wrapper">
                    <h3 class="img-info-title">Comments</h3>
                      <p class="img-info">${a.comments}</p>
                    </div>
  
                    <div class="img-part-info-wrapper">
                    <h3 class="img-info-title">Downloads</h3>
                      <p class="img-info">${a.downloads}</p>
                    </div>
                  </div>
              </a>
            </li>
            `).join("");u.insertAdjacentHTML("beforeend",t)},d=async()=>{const o=localStorage.getItem("userInput")||"",t=new URLSearchParams({key:b,q:`${o}`,image_type:"photo",orientation:"horizontal",safesearch:!0,page:i,per_page:m}),a=`${S}?${t}`;y();try{const s=await v.get(a),{hits:e}=s.data;h=Math.ceil(s.data.totalHits/m),g(),e.length===0?p.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):I(e),new L(".gallery a",{captionDelay:250,captionType:"attr",captionsData:"alt"}).refresh()}catch(s){console.log(s),g()}};let i=1,m=40,h;const $=async()=>{i>=h&&(n.classList.add("inactive"),p.error({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}));try{y(),await d(),i+=1}catch(o){console.log(o)}},n=document.querySelector(".load-more-btn");n.classList.add("inactive");n.addEventListener("click",async()=>{await $(),q()});l.addEventListener("submit",async o=>{o.preventDefault();try{localStorage.setItem("userInput",w.value),i=1,await d()}catch(t){console.error("LocalStorage error:",t.message)}});const q=()=>{const t=document.querySelector(".gallery-item").getBoundingClientRect();console.log(t),window.scrollBy({top:t.height*2,behavior:"smooth"})},P=async o=>{o.preventDefault(),u.innerHTML="",i=1;try{await d()}catch(t){console.log(t)}l.reset(),n.classList.remove("inactive")};l.addEventListener("submit",P);
//# sourceMappingURL=commonHelpers.js.map

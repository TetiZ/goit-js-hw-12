import{a as w,i as u,S as b}from"./assets/vendor-89feecc5.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();const c="/goit-js-hw-12/assets/icons-a6b4e542.svg",g=document.querySelector(".search-form"),L=document.querySelector(".search-input"),h=document.querySelector(".gallery"),S="41640115-31701c1b62cbb4a16b6499d34",x="https://pixabay.com/api/",f=document.querySelector(".loader"),y=()=>f.classList.add("active"),m=()=>f.classList.remove("active"),$=r=>{const t=r.map(s=>`
              <li class="gallery-item">
                <a class="gallery-link" href=${s.largeImageURL}>
                    <img
                      class="gallery-image"
                      src=${s.webformatURL}
                      alt="${s.tags}"
                    />
                  
                  <div class="img-info-wrapper">
                    <div class="img-part-info-wrapper">
                    <h3 class="img-info-title">Likes</h3>
                      <p class="img-info">${s.likes}</p>
                    </div>
  
                    <div class="img-part-info-wrapper">
                    <h3 class="img-info-title">Views</h3>
                      <p class="img-info">${s.views}</p>
                    </div>
  
                    <div class="img-part-info-wrapper">
                    <h3 class="img-info-title">Comments</h3>
                      <p class="img-info">${s.comments}</p>
                    </div>
  
                    <div class="img-part-info-wrapper">
                    <h3 class="img-info-title">Downloads</h3>
                      <p class="img-info">${s.downloads}</p>
                    </div>
                  </div>
              </a>
            </li>
            `).join("");h.insertAdjacentHTML("beforeend",t)},d=async()=>{const r=localStorage.getItem("userInput")||"",t=new URLSearchParams({key:S,q:`${r}`,image_type:"photo",orientation:"horizontal",safesearch:!0,page:i,per_page:p}),s=`${x}?${t}`;y();try{const a=await w.get(s),{hits:e}=a.data;v=Math.ceil(a.data.totalHits/p),m(),e.length===0?u.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):$(e),new b(".gallery a",{captionDelay:250,captionType:"attr",captionsData:"alt",navText:[`<svg
              class="lightbox-button-icon-prev gallery-arrow"
              width="24"
              height="24"
              aria-label="icon arrow left">
            <use href="${c}#icon-arrow-left"></use>
        </svg>`,`<svg
              class="lightbox-button-icon-next gallery-arrow"
              width="24"
              height="24"
              aria-label="icon arrow right">
            <use href="${c}#icon-arrow-right"></use>
        </svg>`],closeText:`<svg
              class="lightbox-close-icon"
              width="32"
              height="32">
            <use href="${c}#icon-close"></use>
      </svg>`}).refresh()}catch(a){console.log(a),m()}};let i=1,p=40,v;const I=async()=>{i>=v&&(n.classList.add("inactive"),u.error({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}));try{y(),await d(),i+=1}catch(r){console.log(r)}},n=document.querySelector(".load-more-btn");n.classList.add("inactive");n.addEventListener("click",async()=>{await I(),q()});g.addEventListener("submit",async r=>{r.preventDefault();try{localStorage.setItem("userInput",L.value),i=1,await d()}catch(t){console.error("LocalStorage error:",t.message)}});const q=()=>{const t=document.querySelector(".gallery-item").getBoundingClientRect();console.log(t),window.scrollBy({top:t.height*2,behavior:"smooth"})},P=async r=>{r.preventDefault(),h.innerHTML="",i=1;try{await d()}catch(t){console.log(t)}g.reset(),n.classList.remove("inactive")};g.addEventListener("submit",P);
//# sourceMappingURL=commonHelpers.js.map

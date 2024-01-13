import{a as v,i as p,S as L}from"./assets/vendor-89feecc5.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const l=document.querySelector(".search-form");document.querySelector(".search-input");const g=document.querySelector(".gallery"),b="41640115-31701c1b62cbb4a16b6499d34",w="https://pixabay.com/api/",u=document.querySelector(".loader"),f=()=>u.classList.add("active"),d=()=>u.classList.remove("active");let i=1,m=40,h;const n=document.querySelector(".load-more-btn");n.classList.add("inactive");const S=async()=>{i>=h&&(n.classList.add("inactive"),p.error({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}));try{f(),await y(),i+=1}catch(r){console.log(r)}};n.addEventListener("click",S);l.addEventListener("input",r=>{r.preventDefault();try{localStorage.setItem("userInput",r.target.value)}catch(o){console.error("LocalStorage error:",o.message)}});const y=async()=>{const r=localStorage.getItem("userInput")||"",o=new URLSearchParams({key:b,q:`${r}`,image_type:"photo",orientation:"horizontal",safesearch:!0,page:i,per_page:m}),s=`${w}?${o}`;f();try{const a=await v.get(s),{hits:e}=a.data;h=Math.ceil(a.data.totalHits/m),d(),e.length===0?p.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):I(e),new L(".gallery a",{captionDelay:250,captionType:"attr",captionsData:"alt"}).refresh()}catch(a){console.log(a),d()}},I=r=>{const o=r.map(s=>`
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
            `).join("");g.insertAdjacentHTML("beforeend",o)},$=async r=>{r.preventDefault(),g.innerHTML="",i=1,n.classList.remove("inactive");try{y()}catch(o){console.log(o)}l.reset()};l.addEventListener("submit",$);
//# sourceMappingURL=commonHelpers.js.map

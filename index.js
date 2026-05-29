/* empty css                      */import{a as q,S as P,i as n}from"./assets/vendor-BSxrTp-N.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const B="https://pixabay.com/api/",M="56068284-30f7ab574d20f3e020b06a8c1";async function y(a,r){const o={key:M,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:r};return(await q.get(B,{params:o})).data}function m(a){return a.map(({webformatURL:r,largeImageURL:o,tags:l,likes:e,views:t,comments:s,downloads:S})=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${o}">
          <img
            class="gallery-image"
            src="${r}"
            alt="${l}"
            loading="lazy"
          />
          <ul class="gallery-info">
            <li class="gallery-info-item">
              <p class="gallery-info-label">Likes</p>
              <p class="gallery-info-value">${e}</p>
            </li>
            <li class="gallery-info-item">
              <p class="gallery-info-label">Views</p>
              <p class="gallery-info-value">${t}</p>
            </li>
            <li class="gallery-info-item">
              <p class="gallery-info-label">Comments</p>
              <p class="gallery-info-value">${s}</p>
            </li>
            <li class="gallery-info-item">
              <p class="gallery-info-label">Downloads</p>
              <p class="gallery-info-value">${S}</p>
            </li>
          </ul>
        </a>
      </li>`).join("")}const p=document.querySelector(".form"),$=document.querySelector(".search-input"),c=document.querySelector(".gallery"),h=document.querySelector(".loader"),g=document.querySelector(".load-more-btn");let i=1,u="",d=0,L=new P(".gallery a",{captionsData:"alt",captionDelay:250});function b(){h.classList.remove("hidden")}function w(){h.classList.add("hidden")}function E(){c.innerHTML=""}function v(){g.classList.remove("hidden")}function f(){g.classList.add("hidden")}function O(){const{height:a}=c.firstElementChild.getBoundingClientRect();window.scrollBy({top:a*2,behavior:"smooth"})}p.addEventListener("submit",async a=>{a.preventDefault();const r=$.value.trim();if(r){u=r,i=1,E(),f(),b();try{const o=await y(u,i);if(d=o.totalHits,o.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please, try again!",position:"topRight",closeButton:!0,backgroundColor:"#ef4040",messageColor:"#fafafb",iconUrl:"",icon:""});return}const l=m(o.hits);c.insertAdjacentHTML("beforeend",l),L.refresh(),p.reset(),o.hits.length<d&&v()}catch{n.error({message:"Something went wrong. Please try again later.",position:"topRight"})}finally{w()}}});g.addEventListener("click",async()=>{i+=1,b(),f();try{const a=await y(u,i),r=m(a.hits);c.insertAdjacentHTML("beforeend",r),L.refresh(),O(),i*15>=d?(f(),n.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):v()}catch{n.error({message:"Something went wrong. Please try again later.",position:"topRight"})}finally{w()}});
//# sourceMappingURL=index.js.map

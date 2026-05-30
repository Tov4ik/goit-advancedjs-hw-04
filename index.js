/* empty css                      */import{a as q,S as P,i}from"./assets/vendor-BSxrTp-N.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const B="https://pixabay.com/api/",M="56068284-30f7ab574d20f3e020b06a8c1";async function y(a,r){const o={key:M,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:r};return(await q.get(B,{params:o})).data}function m(a){return a.map(({webformatURL:r,largeImageURL:o,tags:s,likes:e,views:t,comments:l,downloads:S})=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${o}">
          <img
            class="gallery-image"
            src="${r}"
            alt="${s}"
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
              <p class="gallery-info-value">${l}</p>
            </li>
            <li class="gallery-info-item">
              <p class="gallery-info-label">Downloads</p>
              <p class="gallery-info-value">${S}</p>
            </li>
          </ul>
        </a>
      </li>`).join("")}const p=document.querySelector(".form"),R=document.querySelector(".search-input"),c=document.querySelector(".gallery"),h=document.querySelector(".loader"),g=document.querySelector(".load-more-btn");let n=1,u="",d=0,b=new P(".gallery a",{captionsData:"alt",captionDelay:250});function L(){h.classList.remove("hidden")}function v(){h.classList.add("hidden")}function $(){c.innerHTML=""}function w(){g.classList.remove("hidden")}function f(){g.classList.add("hidden")}function E(){const{height:a}=c.firstElementChild.getBoundingClientRect();window.scrollBy({top:a*2,behavior:"smooth"})}p.addEventListener("submit",async a=>{a.preventDefault();const r=R.value.trim();if(r){u=r,n=1,$(),f(),L();try{const o=await y(u,n);if(d=o.totalHits,o.hits.length===0){i.error({message:"Sorry, there are no images matching your search query. Please, try again!",position:"topRight",closeButton:!0,backgroundColor:"#ef4040",messageColor:"#fafafb",iconUrl:"",icon:""});return}const s=m(o.hits);c.insertAdjacentHTML("beforeend",s),b.refresh(),p.reset(),o.hits.length<d?w():i.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})}catch{i.error({message:"Something went wrong. Please try again later.",position:"topRight"})}finally{v()}}});g.addEventListener("click",async()=>{n+=1,L(),f();try{const a=await y(u,n),r=m(a.hits);c.insertAdjacentHTML("beforeend",r),b.refresh(),E(),n*15>=d?(f(),i.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):w()}catch{i.error({message:"Something went wrong. Please try again later.",position:"topRight"})}finally{v()}});
//# sourceMappingURL=index.js.map

import"./assets/modulepreload-polyfill-B5Qt9EMX.js";import{i}from"./assets/vendor-BbbuE1sJ.js";const m=document.querySelector(".form");function a(e,t){const o=Math.random()>.3;return new Promise((s,r)=>{setTimeout(()=>{o?s({position:e,delay:t}):r({position:e,delay:t})},t)})}m.addEventListener("submit",e=>{e.preventDefault();const{delay:t,state:o}=e.currentTarget.elements;a(o.value,Number(t.value)).then(({delay:s})=>{i.success({title:!1,message:`✅ Fulfilled promise in ${s}ms`,position:"topRight",timeout:3e3,displayMode:2})}).catch(({delay:s})=>{i.error({title:!1,message:`❌ Rejected promise in ${s}ms`,position:"topRight",timeout:3e3,displayMode:2})})});
//# sourceMappingURL=2-snackbar.js.map

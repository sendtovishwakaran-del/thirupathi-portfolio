const stage=document.querySelector('#dragon-stage');
const fallback=document.querySelector('#dragon-fallback');
const status=document.querySelector('#dragon-status');
if(stage && fallback){
 window.addEventListener('pointermove',(e)=>{const r=stage.getBoundingClientRect();const x=Math.max(-1,Math.min(1,(e.clientX-(r.left+r.width/2))/(window.innerWidth/2)));const y=Math.max(-1,Math.min(1,(e.clientY-(r.top+r.height/2))/(window.innerHeight/2)));const head=fallback.querySelector('#fallback-dragon-head');if(head)head.style.transform=`rotate(${x*4}deg) translate(${x*5}px,${y*5}px)`;for(const [id,bx] of [['pupil-left',200],['pupil-right',310]]){const eye=fallback.querySelector('#'+id);if(eye){eye.setAttribute('cx',bx+x*10);eye.setAttribute('cy',245+y*7)}}},{passive:true});
 const reduce=window.matchMedia('(prefers-reduced-motion: reduce)');if(!reduce.matches){setInterval(()=>{fallback.classList.add('blink');setTimeout(()=>fallback.classList.remove('blink'),150)},3200)}
 import('./dragon.js').then(({mountDragon})=>{try{mountDragon(stage);fallback.classList.add('rendered');status.textContent='';}catch(err){console.warn('Three.js unavailable; using animated dragon fallback',err);status.textContent='Interactive dragon preview';}}).catch(err=>{console.warn('3D import unavailable; animated fallback active',err);status.textContent='Interactive dragon preview';});
}
const menu=document.querySelector('.menu-button'),nav=document.querySelector('#primary-nav');if(menu&&nav){menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')==='true';menu.setAttribute('aria-expanded',String(!open));nav.classList.toggle('is-open',!open)});nav.addEventListener('click',e=>{if(e.target.closest('a')){nav.classList.remove('is-open');menu.setAttribute('aria-expanded','false')}})}

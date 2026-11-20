const menu=document.querySelector('.menu-button');
const nav=document.querySelector('#primary-nav');
if(menu && nav){
  menu.addEventListener('click',()=>{
    const isOpen=menu.getAttribute('aria-expanded')==='true';
    menu.setAttribute('aria-expanded',String(!isOpen));
    nav.classList.toggle('is-open',!isOpen);
  });
  nav.addEventListener('click',event=>{
    if(event.target.closest('a')){
      nav.classList.remove('is-open');
      menu.setAttribute('aria-expanded','false');
    }
  });
}

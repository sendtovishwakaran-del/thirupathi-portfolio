import { mountDragon } from './dragon.js';
const host = document.getElementById('dragon-stage');
if (host) {
  try { mountDragon(host); }
  catch (error) { console.error('Unable to render dragon:', error); const fallback = host.querySelector('.dragon-error'); if (fallback) fallback.hidden = false; }
}
const menu = document.querySelector('.menu-button');
const nav = document.querySelector('#primary-nav');
if (menu && nav) {
  menu.addEventListener('click', () => {const open = menu.getAttribute('aria-expanded') === 'true'; menu.setAttribute('aria-expanded', String(!open)); nav.classList.toggle('is-open', !open);});
  nav.addEventListener('click', e => {if (e.target.closest('a')) {nav.classList.remove('is-open');menu.setAttribute('aria-expanded', 'false');}});
}

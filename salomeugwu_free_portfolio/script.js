const header=document.querySelector('.site-header');
document.querySelector('.menu-toggle')?.addEventListener('click',()=>header.classList.toggle('open'));
document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>header.classList.remove('open')));
const toggle=document.getElementById('themeToggle');
if(localStorage.getItem('salome-theme')==='dark') document.body.classList.add('darkmode');
toggle?.addEventListener('click',()=>{
  document.body.classList.toggle('darkmode');
  localStorage.setItem('salome-theme',document.body.classList.contains('darkmode')?'dark':'light');
});
document.getElementById('year').textContent=new Date().getFullYear();
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.08});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

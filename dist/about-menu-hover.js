document.querySelectorAll('.about-menu .about-nav-group').forEach(group=>{
 let timer;
 const open=()=>{clearTimeout(timer);document.querySelectorAll('.about-menu .about-nav-group').forEach(other=>{if(other!==group)other.open=false});group.open=true};
 group.addEventListener('pointerenter',event=>{if(event.pointerType==='mouse')open()});
 group.addEventListener('pointerleave',event=>{if(event.pointerType==='mouse'){clearTimeout(timer);timer=setTimeout(()=>{if(!group.contains(document.activeElement))group.open=false},180)}});
 group.addEventListener('focusin',()=>clearTimeout(timer));
 group.addEventListener('focusout',()=>setTimeout(()=>{if(!group.contains(document.activeElement))group.open=false},0));
 group.addEventListener('keydown',event=>{if(event.key==='Escape'){group.open=false;group.querySelector('summary').focus()}});
});
document.addEventListener('pointerdown',event=>{if(!event.target.closest('.about-nav-group'))document.querySelectorAll('.about-menu .about-nav-group').forEach(group=>group.open=false)});

// Keep the section menu directly below the responsive main header.
(()=>{const header=document.getElementById('site-header');if(!header)return;const update=()=>document.documentElement.style.setProperty('--about-menu-top',Math.ceil(header.getBoundingClientRect().height)+'px');update();new ResizeObserver(update).observe(header);})();

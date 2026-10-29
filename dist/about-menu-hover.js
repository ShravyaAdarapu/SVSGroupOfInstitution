document.querySelectorAll('.about-menu .about-nav-group').forEach(group=>{
 let timer;
 const open=()=>{clearTimeout(timer);document.querySelectorAll('.about-menu .about-nav-group').forEach(other=>{if(other!==group&&!other.contains(group)&&!group.contains(other))other.open=false});group.open=true};
 const scheduleClose=()=>{clearTimeout(timer);timer=setTimeout(()=>{if(!group.matches(':hover')&&!group.contains(document.activeElement))group.open=false},350)};
 const summary=group.querySelector(':scope > summary');
 // Hover already opens a details element. Do not let its native click close it
 // again when a mouse user clicks the trigger to reach the next submenu.
 summary.addEventListener('click',event=>{if(event.detail>0&&matchMedia('(hover: hover) and (pointer: fine)').matches){event.preventDefault();open()}});
 group.addEventListener('pointerenter',event=>{if(event.pointerType==='mouse')open()});
 group.addEventListener('pointerleave',event=>{if(event.pointerType==='mouse')scheduleClose()});
 group.addEventListener('focusin',()=>clearTimeout(timer));
 group.addEventListener('focusout',scheduleClose);
 group.addEventListener('keydown',event=>{if(event.key==='Escape'){group.open=false;group.querySelector('summary').focus()}});
});
document.addEventListener('pointerdown',event=>{if(!event.target.closest('.about-nav-group'))document.querySelectorAll('.about-menu .about-nav-group').forEach(group=>group.open=false)});
document.querySelectorAll('.about-menu .about-nav-people a').forEach(link=>link.addEventListener('click',()=>{document.querySelectorAll('.about-menu .about-nav-group').forEach(group=>group.open=false)}));

// Keep the section menu directly below the responsive main header.
(()=>{const header=document.getElementById('site-header');if(!header)return;const update=()=>document.documentElement.style.setProperty('--about-menu-top',Math.ceil(header.getBoundingClientRect().height)+'px');update();new ResizeObserver(update).observe(header);})();

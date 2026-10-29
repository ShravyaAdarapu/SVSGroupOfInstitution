(()=>{
 const root=document.querySelector('.facilities-slider');if(!root)return;
 const track=root.querySelector('.facilities-slider-track'),slides=[...track.children],buttons=[...root.querySelectorAll('[data-facility-slide]')],count=root.querySelector('.facilities-slide-count');
 let selected=0,timer,startX=null;const reduced=matchMedia('(prefers-reduced-motion: reduce)');
 const select=index=>{selected=(index+slides.length)%slides.length;track.style.transform=`translateX(-${selected*100}%)`;slides.forEach((slide,i)=>{slide.inert=i!==selected;slide.setAttribute('aria-hidden',String(i!==selected))});buttons.forEach((button,i)=>button.setAttribute('aria-pressed',String(i===selected)));count.textContent=`0${selected+1} / 04`};
 const restart=()=>{clearInterval(timer);if(!reduced.matches)timer=setInterval(()=>{if(!document.hidden&&!root.matches(':hover')&&!root.contains(document.activeElement))select(selected+1)},7000)};
 buttons.forEach((button,i)=>button.addEventListener('click',()=>{select(i);restart()}));
 root.addEventListener('keydown',event=>{if(!event.target.closest('.facilities-slider-dots'))return;if(event.key==='ArrowRight'||event.key==='ArrowLeft'){event.preventDefault();select(selected+(event.key==='ArrowRight'?1:-1));buttons[selected].focus();restart()}});
 root.addEventListener('touchstart',event=>{startX=event.touches[0].clientX},{passive:true});root.addEventListener('touchend',event=>{if(startX===null)return;const difference=startX-event.changedTouches[0].clientX;if(Math.abs(difference)>50){select(selected+(difference>0?1:-1));restart()}startX=null},{passive:true});
 reduced.addEventListener('change',restart);select(0);restart();
})();

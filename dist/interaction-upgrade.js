(()=>{
const nav=document.querySelector('#nav');
const closeMenu=item=>{if(!item.open)return;if(matchMedia('(prefers-reduced-motion: reduce)').matches){item.open=false;return}item.classList.add('is-closing');setTimeout(()=>{item.classList.remove('is-closing');if(!item.matches(':hover'))item.open=false},150)};
if(nav){const deptGroups=[['pre-clinical','Pre-clinical'],['para-clinical','Para-clinical'],['clinical','Clinical']];nav.querySelectorAll('.nav-dropdown > a[href="departments.html"]').forEach(link=>{const sub=document.createElement('div');sub.className='nav-sub';link.classList.add('has-flyout');link.before(sub);sub.append(link);const fly=document.createElement('div');fly.className='nav-flyout';fly.innerHTML=deptGroups.map(([id,label])=>`<a href="departments.html?group=${id}">${label}</a>`).join('');sub.append(fly);sub.addEventListener('pointerenter',()=>{sub.classList.toggle('flip',sub.getBoundingClientRect().right+230>innerWidth)})});nav.querySelectorAll('.nav-dropdown').forEach(menu=>Array.from(menu.children).forEach((child,i)=>child.style.setProperty('--i',i)))}
if(nav){nav.querySelectorAll(':scope > details').forEach(item=>{let timer;const trigger=item.querySelector('summary');item.addEventListener('pointerenter',e=>{if(e.pointerType==='mouse'&&matchMedia('(min-width:1101px)').matches){clearTimeout(timer);item.classList.remove('is-closing');nav.querySelectorAll('details').forEach(other=>{if(other!==item)other.open=false});item.open=true}});item.addEventListener('pointerleave',()=>{timer=setTimeout(()=>{if(!item.contains(document.activeElement))closeMenu(item)},160)});trigger.addEventListener('keydown',e=>{if(e.key==='ArrowDown'){e.preventDefault();item.open=true;item.querySelector('a')?.focus()}});item.querySelectorAll('a').forEach((a,i,links)=>a.addEventListener('keydown',e=>{if(e.key==='ArrowDown'||e.key==='ArrowUp'){e.preventDefault();links[(i+(e.key==='ArrowDown'?1:links.length-1))%links.length].focus()}if(e.key==='Escape'){item.open=false;trigger.focus()}}))})}
document.querySelectorAll('.section-menu').forEach(aside=>{aside.classList.add('popular-panel');const title=aside.querySelector('h3');if(title)title.textContent='Popular searches';const links=Array.from(aside.querySelectorAll('a'));const filter=document.createElement('input');filter.type='search';filter.placeholder='Find college information';filter.setAttribute('aria-label','Filter popular searches');filter.className='popular-filter';title?.after(filter);const list=document.createElement('div');list.className='popular-list';links.forEach(a=>list.append(a));aside.append(list);const empty=document.createElement('p');empty.className='popular-empty';empty.textContent='No matching links';empty.hidden=true;aside.append(empty);filter.addEventListener('input',()=>{const term=filter.value.trim().toLowerCase();links.forEach(a=>a.hidden=!a.textContent.toLowerCase().includes(term));empty.hidden=links.some(a=>!a.hidden)})});
const icons={whatsapp:'<path d="M20.5 11.7a8.5 8.5 0 0 1-12.6 7.5L3 20.5l1.3-4.8A8.5 8.5 0 1 1 20.5 11.7Z"/><path d="M8 7.5c.5 4 3 6.5 7 7l1-2-2-1-1 1c-1.5-.5-2.5-1.5-3-3l1-1-1-2Z"/>',instagram:'<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17.5 6.5h.01"/>',facebook:'<path d="M14 21v-8h3l.5-4H14V7c0-1 .5-2 2-2h2V1h-3c-4 0-6 2-6 6v2H6v4h3v8"/>',linkedin:'<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8 10.5V17M8 7.5v.01M12 17v-6.5M12 13.5c0-1.9 1.1-3 2.6-3S17 11.6 17 13.5V17"/>',search:'<circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/>',up:'<path d="M12 21V3m-7 7 7-7 7 7"/>'};
const svg=name=>`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icons[name]}</svg>`;
const rail=document.createElement('aside');rail.className='social-rail';rail.setAttribute('aria-label','Social links and page tools');
/* PLACEHOLDER WhatsApp number (dummy, not a real line). Replace with the institution's official number before launch: country code + number, digits only. */
const whatsappNumber='910000000000';
const whatsappMessage='Hello SVS, I would like to know more about admissions.';
const socialLinks={whatsapp:whatsappNumber?`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`:'',instagram:'https://www.instagram.com/svs.groupofinstitutions/',facebook:'https://www.facebook.com/svsgroupofinstitutionsmahabubnagar',linkedin:'https://www.linkedin.com/company/svs-group-of-institutions-mahabubnagar/'};
const labels={whatsapp:'WhatsApp',instagram:'Instagram',facebook:'Facebook',linkedin:'LinkedIn'};
['whatsapp','instagram','facebook','linkedin'].forEach(name=>{const url=socialLinks[name];const control=document.createElement(url?'a':'button');control.className='social-control social-'+name;control.setAttribute('aria-label',url?labels[name]+' (opens in a new tab)':labels[name]);control.innerHTML=svg(name)+(name==='whatsapp'?'<span class="wa-bubble"><strong>Chat with us</strong></span>':`<span>${labels[name]}</span>`);if(name==='whatsapp')control.setAttribute('aria-label',url?'Chat with us on WhatsApp (opens in a new tab)':'Chat with us');if(url){control.href=url;control.target='_blank';control.rel='noopener noreferrer'}else control.onclick=()=>show('Connect with SVS','<p>For assistance, contact the college office on <a href="tel:08542227902">08542-227902</a> or <a href="mailto:svsmc_mbnr@yahoo.co.in">svsmc_mbnr@yahoo.co.in</a>.</p><p>The official WhatsApp number will be available here once confirmed.</p>','Contact SVS');rail.append(control)});const wa=rail.querySelector('.social-whatsapp');if(wa&&!sessionStorage.getItem('svs-wa-peek')){setTimeout(()=>{wa.classList.add('is-peeking');sessionStorage.setItem('svs-wa-peek','1');setTimeout(()=>wa.classList.remove('is-peeking'),3500)},4000)}
const top=document.createElement('button');top.className='back-to-top';top.setAttribute('aria-label','Back to top');top.innerHTML=svg('up');top.onclick=()=>window.scrollTo({top:0,behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});document.body.append(rail,top);
const visibility=()=>top.classList.toggle('is-visible',window.scrollY>350);window.addEventListener('scroll',visibility,{passive:true});visibility();
})();

/* Enquiry pop-up: opens from the header Admissions button and any [data-enquiry] control.
   No backend exists, so Continue opens the visitor's email app with the enquiry addressed to the college office. */
(()=>{
const office='svsmc_mbnr@yahoo.co.in',phone='08542227902',phoneLabel='08542-227902';
const modal=document.createElement('dialog');modal.className='enquiry-modal';modal.setAttribute('aria-labelledby','enquiry-title');
modal.innerHTML=`<div class="enquiry-card">
<button type="button" class="enquiry-close" aria-label="Close enquiry">×</button>
<div class="enquiry-brand"><img src="assets/svs-logo.png" alt="SVS Group of Institutions" width="543" height="288"></div>
<h2 id="enquiry-title">Start your enquiry</h2>
<p class="enquiry-intro">Tell us a little about yourself and we’ll point you to the right person.</p>
<form class="enquiry-form" novalidate>
<label class="enquiry-field"><span>Your name</span><input name="name" required autocomplete="name" placeholder="Full name"></label>
<label class="enquiry-field enquiry-phone"><span>Mobile number</span><span class="enquiry-prefix" aria-hidden="true">+91</span><input name="phone" type="tel" inputmode="numeric" required autocomplete="tel-national" pattern="[6-9][0-9]{9}" placeholder="10-digit mobile number"></label>
<fieldset class="enquiry-interest"><legend>I’m interested in</legend>
<label><input type="radio" name="interest" value="Medical College" required><span>Medical</span></label>
<label><input type="radio" name="interest" value="Dental College"><span>Dental</span></label>
<label><input type="radio" name="interest" value="Nursing College"><span>Nursing</span></label>
</fieldset>
<label class="enquiry-field"><span>Your question <em>(optional)</em></span><textarea name="question" rows="2" placeholder="Eligibility, hostels, fees…"></textarea></label>
<button class="enquiry-submit" type="submit" disabled>Continue</button>
</form>
<div class="enquiry-done" hidden><h3>Your email is ready to send</h3><p>We’ve opened your email app with the enquiry addressed to the college office. Just press send. If nothing opened, call <a href="tel:${phone}">${phoneLabel}</a> or write to <a href="mailto:${office}">${office}</a>.</p><button type="button" class="enquiry-submit is-ready enquiry-finish">Done</button></div>
<div class="enquiry-direct"><span>Or reach us directly</span><a href="tel:${phone}" aria-label="Call the college office"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2Z"/></svg></a><a href="mailto:${office}" aria-label="Email the college office"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg></a><a href="admissions.html" aria-label="Admissions information"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg></a></div>
<p class="enquiry-note">Continue opens your email app with this enquiry ready to send. Nothing is stored on this website.</p>
</div>`;
document.body.append(modal);
const form=modal.querySelector('.enquiry-form'),submit=form.querySelector('.enquiry-submit'),done=modal.querySelector('.enquiry-done');
const phoneInput=form.elements.phone;
phoneInput.addEventListener('input',()=>{phoneInput.value=phoneInput.value.replace(/\D/g,'').slice(0,10)});
const refresh=()=>{const ok=form.checkValidity();submit.disabled=!ok;submit.classList.toggle('is-ready',ok)};
form.addEventListener('input',refresh);form.addEventListener('change',refresh);
let opener=null;
const open=interest=>{opener=document.activeElement;form.hidden=false;done.hidden=true;if(interest){const r=form.querySelector(`input[name="interest"][value="${interest}"]`);if(r)r.checked=true}refresh();modal.showModal();document.documentElement.classList.add('enquiry-open');setTimeout(()=>form.elements.name.focus(),60)};
const close=()=>{modal.classList.add('is-closing');setTimeout(()=>{modal.classList.remove('is-closing');modal.close()},matchMedia('(prefers-reduced-motion: reduce)').matches?0:180)};
modal.addEventListener('close',()=>{document.documentElement.classList.remove('enquiry-open');opener?.focus?.()});
modal.addEventListener('cancel',e=>{e.preventDefault();close()});
modal.addEventListener('click',e=>{if(e.target===modal)close()});
modal.querySelector('.enquiry-close').onclick=close;
modal.querySelector('.enquiry-finish').onclick=close;
form.addEventListener('submit',e=>{e.preventDefault();if(!form.checkValidity()){form.reportValidity();return}
const d=Object.fromEntries(new FormData(form));
const body=[`Name: ${d.name.trim()}`,`Mobile: +91 ${d.phone}`,`Interested in: ${d.interest}`,'',d.question.trim()||'I would like to know more about admissions.'].join('\n');
location.href=`mailto:${office}?subject=${encodeURIComponent('Admissions enquiry: '+d.interest)}&body=${encodeURIComponent(body)}`;
form.hidden=true;done.hidden=false;done.querySelector('button').focus()});
document.querySelectorAll('#site-header a.button.small[href="admissions.html"],[data-enquiry]').forEach(trigger=>trigger.addEventListener('click',e=>{e.preventDefault();open(trigger.dataset.interest)}));
if(document.querySelector('[data-enquiry-autoopen]')&&!sessionStorage.getItem('svs-enquiry-shown')){sessionStorage.setItem('svs-enquiry-shown','1');setTimeout(()=>open(),700)}
})();

/* Header polish: search icon that matches the nav, and a transparent header over the homepage video */
(()=>{
const header=document.querySelector('#site-header');if(!header)return;
const search=header.querySelector('.site-search');
if(search)search.innerHTML='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>';
const hero=document.querySelector('.hero-film,.about-hero');if(!hero)return;
const root=document.documentElement;root.classList.add('has-video-header');const logo=header.querySelector('.svs-logo');if(logo)logo.src='assets/svs-logo-transparent.png';
const utility=document.querySelector('.utility');const measure=()=>{root.style.setProperty('--header-h',header.offsetHeight+'px');root.style.setProperty('--top-h',(header.offsetHeight+(utility?.offsetHeight||0))+'px')};
const edge=document.querySelector('.about-shell');const update=()=>{const limit=edge?edge.getBoundingClientRect().top:hero.getBoundingClientRect().bottom;const solid=limit<=header.offsetHeight+20||header.querySelector('#nav.open');root.classList.toggle('header-solid',!!solid)};
measure();update();
addEventListener('resize',()=>{measure();update()},{passive:true});
addEventListener('scroll',update,{passive:true});addEventListener('load',()=>{measure();update()});
header.querySelector('#menu')?.addEventListener('click',()=>setTimeout(update,0));
})();

/* Homepage: counting stats and the UG / PG admissions switch */
(()=>{
const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
const counters=document.querySelectorAll('[data-count],[data-count-since]');
const target=el=>el.dataset.countSince?new Date().getFullYear()-Number(el.dataset.countSince):Number(el.dataset.count);
const render=(el,n)=>{el.textContent=n.toLocaleString('en-IN')+(el.dataset.suffix||'')};
const run=el=>{const end=target(el);if(reduced){render(el,end);return}const start=performance.now(),dur=1400;const step=t=>{const p=Math.min((t-start)/dur,1);render(el,Math.round(end*(1-Math.pow(1-p,3))));if(p<1)requestAnimationFrame(step)};requestAnimationFrame(step);setTimeout(()=>render(el,end),dur+250)};
counters.forEach(c=>render(c,target(c)));
if(counters.length&&!reduced){if('IntersectionObserver' in window){const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){run(e.target);io.unobserve(e.target)}}),{threshold:.4});counters.forEach(c=>io.observe(c))}else counters.forEach(c=>render(c,target(c)))}
const toggle=document.querySelector('.admit-toggle');if(!toggle)return;
const tabs=Array.from(toggle.querySelectorAll('[role="tab"]'));
const select=tab=>{tabs.forEach(t=>{const on=t===tab;t.setAttribute('aria-selected',String(on));t.tabIndex=on?0:-1;const panel=document.getElementById(t.getAttribute('aria-controls'));panel.hidden=!on;if(on){panel.classList.remove('is-entering');void panel.offsetWidth;panel.classList.add('is-entering')}});toggle.classList.toggle('is-pg',tab.id==='admit-tab-pg')};
tabs.forEach((tab,i)=>{tab.addEventListener('click',()=>select(tab));tab.addEventListener('keydown',e=>{if(e.key==='ArrowRight'||e.key==='ArrowLeft'){e.preventDefault();const next=tabs[(i+(e.key==='ArrowRight'?1:tabs.length-1))%tabs.length];select(next);next.focus()}})});
})();

/* About page: side menu switches between sections, with a shareable #hash */
(()=>{
const menu=document.querySelector('.about-menu');if(!menu)return;
const links=Array.from(menu.querySelectorAll('a[aria-controls]'));
const panels=links.map(a=>document.getElementById(a.getAttribute('aria-controls')));
if(!links.length||panels.some(p=>!p))return;
document.documentElement.classList.add('js-about');
const show=(id,focus)=>{const target=panels.find(p=>p.id===id)||panels[0];
panels.forEach(p=>{const on=p===target;p.hidden=!on;if(on){p.classList.remove('is-entering');void p.offsetWidth;p.classList.add('is-entering')}});
links.forEach(a=>{const active=a.getAttribute('aria-controls')===target.id;a.setAttribute('aria-current',String(active));if(active){const group=a.closest('.about-nav-group');if(group)group.dataset.active='true'}});
if(focus){target.focus({preventScroll:true});const offset=(document.getElementById('site-header')?.getBoundingClientRect().height||110)+menu.getBoundingClientRect().height+24;const top=target.getBoundingClientRect().top;scrollTo({top:scrollY+top-offset,behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'})}};
links.forEach(a=>a.addEventListener('click',e=>{e.preventDefault();const id=a.getAttribute('aria-controls');history.replaceState(null,'','#'+id);show(id,true);const group=a.closest('.about-nav-group');if(group)group.open=false}));
addEventListener('hashchange',()=>show(location.hash.slice(1),true));
show(location.hash.slice(1),false);
})();

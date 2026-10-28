document.querySelectorAll('.department-card').forEach(card=>card.addEventListener('click',()=>{const title=card.querySelector('.department-name').textContent;show(title,`<h3>Head of Department</h3><p>${card.dataset.head}</p><p>For departmental enquiries, contact the college office.</p><a class="button" href="contact.html">Contact the college →</a>`,'SVS MEDICAL COLLEGE')}));

(()=>{const directory=document.querySelector('.department-directory');if(!directory)return;
const groups={'pre-clinical':['Anatomy','Physiology','Biochemistry'],'para-clinical':['Pharmacology','Pathology','Microbiology','Forensic Medicine','Community Medicine']};
const labels={all:'All departments','pre-clinical':'Pre-clinical','para-clinical':'Para-clinical',clinical:'Clinical'};
const groupOf=name=>Object.keys(groups).find(g=>groups[g].includes(name))||'clinical';
const cards=Array.from(directory.querySelectorAll('.department-card'));
cards.forEach(card=>card.dataset.group=groupOf(card.querySelector('.department-name').textContent.trim()));
const bar=document.createElement('div');bar.className='department-groups';bar.setAttribute('role','group');bar.setAttribute('aria-label','Filter departments by stage');
bar.innerHTML=Object.entries(labels).map(([id,label])=>`<button type="button" data-group="${id}">${label}</button>`).join('');
const count=document.querySelector('#department-count');count.before(bar);
const search=document.querySelector('#department-search');
const apply=group=>{let n=0;cards.forEach(card=>{card.hidden=group!=='all'&&card.dataset.group!==group;if(!card.hidden)n++});
bar.querySelectorAll('button').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.group===group)));
count.textContent=group==='all'?`${n} departments`:`${n} ${labels[group].toLowerCase()} departments`;
const url=new URL(location);group==='all'?url.searchParams.delete('group'):url.searchParams.set('group',group);history.replaceState(null,'',url)};
bar.addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;if(search)search.value='';apply(b.dataset.group)});
search?.addEventListener('input',()=>bar.querySelectorAll('button').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.group==='all'))));
const start=new URLSearchParams(location.search).get('group');apply(labels[start]?start:'all')})();

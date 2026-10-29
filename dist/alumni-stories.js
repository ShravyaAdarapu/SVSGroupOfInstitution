document.querySelectorAll('[data-alumni-name]').forEach(button=>button.addEventListener('click',()=>{
 const dialog=document.getElementById('dialog'),content=document.getElementById('dialog-content');if(!dialog||!content)return;
 content.replaceChildren();const label=document.createElement('p');label.className='section-label';label.textContent='Sample alumni story';const heading=document.createElement('h2');heading.textContent=button.dataset.alumniName;const body=document.createElement('p');body.textContent=button.dataset.alumniStory;const link=document.createElement('a');link.href='mailto:svsmc_mbnr@yahoo.co.in?subject=My%20SVS%20alumni%20story';link.className='home-inline-link';link.textContent='Share your own SVS story ↗';content.append(label,heading,body,link);dialog.showModal();
}));

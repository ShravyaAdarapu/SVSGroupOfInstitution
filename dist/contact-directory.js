(()=>{
 const frame=document.getElementById('college-map');if(!frame)return;
 const destinations={medical:['Medical College','SVS Medical College Yenugonda Mahabubnagar'],dental:['Dental College','SVS Institute of Dental Sciences Appanapally Mahabubnagar'],nursing:['Nursing College','SVS College of Nursing Yenugonda Mahabubnagar']};
 const buttons=[...document.querySelectorAll('[data-campus-map]')],link=document.getElementById('college-map-directions');
 buttons.forEach(button=>button.addEventListener('click',()=>{const [name,query]=destinations[button.dataset.campusMap];buttons.forEach(other=>other.setAttribute('aria-pressed',String(other===button)));frame.src='https://maps.google.com/maps?q='+encodeURIComponent(query)+'&output=embed';frame.title='SVS '+name+' campus map';link.href='https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(query);link.textContent='Open '+name+' in Maps ↗'}));
})();

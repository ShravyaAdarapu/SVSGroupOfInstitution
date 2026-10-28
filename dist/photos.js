const photoDetails={
 'nursing-community':['Walking through the nursing campus','Students walking together through the SVS nursing campus.'],
 'medical-lab':['Working at the microscope','Medical students learning with microscopes at SVS.'],
 'nursing-classroom':['A class at the nursing college','A classroom moment at SVS Nursing College.']
};
document.querySelectorAll('[data-photo]').forEach(button=>button.addEventListener('click',()=>{const key=button.dataset.photo;const [title,caption]=photoDetails[key];show(title,`<img src="assets/${key}.webp" alt="${caption}"><p>${caption}</p>`,'MOMENTS FROM SVS');dialog.classList.add('photo-dialog')}));
dialog.addEventListener('close',()=>dialog.classList.remove('photo-dialog'));

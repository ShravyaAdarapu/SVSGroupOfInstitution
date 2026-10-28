const photoDetails={
 'nursing-community':['The everyday becomes your story.','Students walking together through the SVS nursing campus.'],
 'medical-lab':['Curiosity has a place here.','Medical students learning with microscopes at SVS.'],
 'nursing-classroom':['Making room for your future.','A classroom moment at SVS Nursing College.']
};
document.querySelectorAll('[data-photo]').forEach(button=>button.addEventListener('click',()=>{const key=button.dataset.photo;const [title,caption]=photoDetails[key];show(title,`<img src="assets/${key}.webp" alt="${caption}"><p>${caption}</p>`,'MOMENTS FROM SVS');dialog.classList.add('photo-dialog')}));
dialog.addEventListener('close',()=>dialog.classList.remove('photo-dialog'));

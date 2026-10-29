(()=>{
 const form=document.getElementById('contact-message-form');if(!form)return;
 const status=document.getElementById('contact-message-status');
 const complaint=()=>document.getElementById('kind-complaint').checked;
 document.querySelectorAll('input[name="contact-kind"]').forEach(input=>input.addEventListener('change',()=>{
  const isComplaint=complaint();
  document.getElementById('contact-kind-description').textContent=isComplaint?'Tell us what happened and how we can help. For a formal grievance, contact the college office for the appropriate committee and procedure.':'Ask us about courses, admissions or college facilities.';
  document.getElementById('contact-message-label').textContent=isComplaint?'Your complaint':'Your enquiry';
  document.getElementById('contact-send-button').firstChild.textContent='Mail us ';
  status.textContent='';
 }));
 form.addEventListener('submit',event=>{
  event.preventDefault();if(!form.reportValidity())return;
  const data=new FormData(form),college=data.get('college');
  const recipients={medical:'svsmc_mbnr@yahoo.co.in',dental:'svsids_svsmbnr@yahoo.co.in',nursing:'svsnc.mbnr@yahoo.com'};
  const label={medical:'Medical College',dental:'Dental College',nursing:'Nursing College'}[college];
  const type=complaint()?'Complaint':'Enquiry';
  const body=[type+' for '+label,'','Name: '+data.get('name'),'Email: '+data.get('email'),...(data.get('phone')?['Phone: '+data.get('phone')]:[]),'',data.get('message')].join('\n');
  location.href='mailto:'+recipients[college]+'?subject='+encodeURIComponent(type+' — '+label)+'&body='+encodeURIComponent(body);
  status.textContent='Your email draft is ready to open. Review it in your email app and press Send. If no app opens, email '+recipients[college]+' directly.';
 });
})();

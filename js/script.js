document.getElementById('year').innerText = new Date().getFullYear();

/* RSVP formulaire */
function handleRSVP(e){
  e.preventDefault();
  document.getElementById('form-msg').style.display='block';
}

/* Contact formulaire */
function handleContact(e){
  e.preventDefault();
  document.getElementById('contact-msg').style.display='block';
}

/* Upload photo dans galerie */
function uploadPhoto(){
  const input = document.getElementById('photoInput');
  if(input.files && input.files[0]){
    const reader = new FileReader();
    reader.onload = function(e){
      const img = document.createElement('img');
      img.src = e.target.result;
      img.alt = "Photo ajoutée";
      document.getElementById('gallery').appendChild(img);
    }
    reader.readAsDataURL(input.files[0]);
  }
}

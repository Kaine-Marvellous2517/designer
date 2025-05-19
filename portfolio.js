//Get elements
let portfolioBox = document.querySelector('.portfolio-box');
let editBtn = document.querySelector('.edit-btn');
let adminValidateForm = document.querySelector('.validate-admin-form');
let errorMessage = document.querySelector('.error-message');
let fileTypeBox = document.querySelector('.file-type-box');
let imgBtn = document.querySelector('.img-btn');
let videoBtn = document.querySelector('.video-btn');
let imgFormContainer = document.querySelector('#add-img-portfolio-form');
let videoFormContainer = document.querySelector('#add-video-portfolio-form');
let imgForm = document.querySelector('.add-img-portfolio-form');
let videoForm = document.querySelector('.add-video-portfolio-form');

//Functionalities
window.onclick = (e) => {
  if (e.target == adminValidateForm || e.target == fileTypeBox || e.target == imgFormContainer || e.target == videoFormContainer) {
    adminValidateForm.style = 'display: none';
    fileTypeBox.style = 'display: none';
    imgFormContainer.style = 'display: none';
    videoFormContainer.style = 'display: none';
  }
}

editBtn.onclick = ()=>{
  adminValidateForm.style = 'display: flex';
}

adminValidateForm.onsubmit = (e)=>{
  e.preventDefault();
  let password = document.querySelector('.admin-password');
  if (password.value === '2517') {
    errorMessage.style = 'color: white';
    errorMessage.innerHTML = 'Validating...';
    setTimeout(()=>{
      password.style = 'border: 1px solid gray';
      errorMessage.style = 'background-color: green';
      errorMessage.innerHTML = 'Correct Password!';
      setTimeout(()=>{
        errorMessage.style = 'background-color: black';
        adminValidateForm.style = 'display: none';
        adminValidateForm.reset();
        errorMessage.innerHTML = '';
        fileTypeBox.style = 'display: flex';
      }, 1000)
    }, 1000)
  } else {
    errorMessage.style = 'color: white';
    errorMessage.innerHTML = 'Validating...';
    setTimeout(()=>{
      password.style = 'border: 1px solid red';
      errorMessage.style = 'background-color: red';
      errorMessage.innerHTML = 'Incorrect Password!';
    }, 1000)
  }
}

imgBtn.onclick = ()=>{
  fileTypeBox.style = 'display: none';
  imgFormContainer.style = 'display: flex';
}
imgForm.onsubmit = (e)=>{
  e.preventDefault();
  let img = document.createElement('img');
  img.alt = "client's logo";
  img.style = 'width: 120px';
  let imgFile = document.getElementById('portfolio-img-file').files[0];
  if(imgFile) {
    let reader = new FileReader();
    reader.onload = ()=>{
      imgForm.reset();
      imgFormContainer.style = 'display: none';
      img.src = reader.result;
      portfolioBox.appendChild(img);
    }
    reader.readAsDataURL(imgFile);
  }
}


videoBtn.onclick = ()=>{
  fileTypeBox.style = 'display: none';
  videoFormContainer.style = 'display: flex';
}
videoForm.onsubmit = (e)=>{
  e.preventDefault();
  let video = document.createElement('video');
  video.controls = true;
  video.style = 'width: 240px';
  let videoFile = document.getElementById('portfolio-video-file').files[0];
  if(videoFile) {
    let reader = new FileReader();
    reader.onload = ()=>{
      videoForm.reset();
      videoFormContainer.style = 'display: none';
      video.src = reader.result;
      portfolioBox.appendChild(video);
    }
    reader.readAsDataURL(videoFile);
  }
}

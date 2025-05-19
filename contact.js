let emailBtn = document.querySelector('.email-btn');
let sendEmailContainer = document.querySelector('#send-email-container');
emailBtn.onclick = () => {
  sendEmailContainer.style = 'display: flex';
}
window.onclick = (e)=>{
  if (e.target === sendEmailContainer) {
    sendEmailContainer.style.display = 'none';
  }
}




// Get the form and input elements
let sendEmailForm = document.querySelector('.send-email-form');
let brandName = document.querySelector('#brand-name');
let emailMessage = document.querySelector('#email-message');
sendEmailForm.onsubmit = (e) => {
  e.preventDefault();
  let email = 'kainemarvellous@gmail.com';
  let subject = `Message from ${brandName.value} brand`;
  let body = emailMessage.value;
  let mailtoLink = `mailto:${email}?subject=${subject}&body=${body}`;
  sendEmailContainer.style.display = 'none';
  pageLoad.classList.add('fixed');
  sendEmailForm.reset();
  setTimeout(()=>{
    pageLoad.classList.remove('fixed');
    window.location.href = mailtoLink;
  }, 2400)
}
/* emailBtn.onclick = () => {
  pageLoad.classList.add('fixed');
  setTimeout(() => {
    window.location.href = "mailto:kainemarvellous@gmail.com";
    window.target="_blank";
  }, 2400)
} */
let waBtn = document.querySelector('.wa-btn');
waBtn.onclick = () => {
  pageLoad.classList.add('fixed');
  setTimeout(() => {
    pageLoad.classList.remove('fixed');
    window.location.href = 'https://wa.me/+2347082445934';
    window.target="_blank";
  }, 2400)
}
let xBtn = document.querySelector('.x-btn');
xBtn.onclick = () => {
  pageLoad.classList.add('fixed');
  setTimeout(() => {
    pageLoad.classList.remove('fixed');
    window.location.href = 'https://x.com/KaineMarvellous';
    window.target="_blank";
  }, 2400)
}

let testimonyBox = document.querySelector('.testimony-box');
let commentForm = document.querySelector('.comment-form');
let userName = document.querySelector('#user-name');
let commentTxt = document.querySelector('#comment-txt');
let messageBox = document.querySelector('.message-box');
commentForm.onsubmit = (e)=>{
  e.preventDefault();
  let elem = document.createElement('div');
  elem.innerHTML = `
    <h3>${userName.value}</h3>
    <pre>${commentTxt.value}</pre>
  `;
  elem.classList.add('testimony-txt');
  messageBox.innerHTML = 'Saving post...';
  setTimeout(()=>{
    messageBox.innerHTML = 'Post saved &check;';
    setTimeout(()=>{
      messageBox.innerHTML = '';
      testimonyBox.appendChild(elem);
      commentForm.reset();
    }, 1000)
  }, 1000)
}

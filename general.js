let backToTopButton = document.querySelector('.back-to-top-btn');
backToTopButton.onclick = ()=>{
  window.scrollTo({ top: 0, behavior: 'smooth' });
}


window.addEventListener('scroll', () => {
  if (window.scrollY >= 400) {
    backToTopButton.style.display = 'block';
  } else {
    backToTopButton.style.display = 'none';
  }
});


window.onscroll = () => {
  let pageHeader = document.querySelector('.page-header');
  if (window.scrollY >= 100) {
    pageHeader.classList.add('static');
  } else {
    pageHeader.classList.remove('static');
  }
}

let pageLoad = document.querySelector('.page-load-section');
let homeBtn = document.querySelector('.home-btn');
homeBtn.onclick = () => {
  pageLoad.classList.add('fixed');
  setTimeout(() => {
    window.location.href = 'index.html';
  }, 2400)
}
let portfolioBtn = document.querySelector('.portfolio-btn');
portfolioBtn.onclick = () => {
  pageLoad.classList.add('fixed');
  setTimeout(() => {
    window.location.href = 'portfolio.html';
  }, 2400)
}
let contactBtn = document.querySelector('.contact-btn');
contactBtn.onclick = () => {
  pageLoad.classList.add('fixed');
  setTimeout(() => {
    window.location.href = 'contact.html';
  }, 2400)
}

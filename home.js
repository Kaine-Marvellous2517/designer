let ctaBtn = document.querySelectorAll('.CTA-btn');
ctaBtn.forEach((btn) => {
  btn.onclick = () => {
    pageLoad.classList.add('fixed');
    setTimeout(() => {
      window.location.href = 'contact.html';
    }, 2400)
  }
})
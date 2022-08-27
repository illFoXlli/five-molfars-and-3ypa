upBtn.addEventListener('click', () => {
   window.scrollTo(0, 0);
});

window.onscroll = () => {
   if (window.scrollY > 700) {
      upBtn.classList.remove('btn-hidden');
   } else if (window.scrollY < 700) {
      upBtn.classList.add('btn-hidden');
   }
}

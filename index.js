const accordionBtns = document.querySelectorAll('.btn'); 
accordionBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const content = btn.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
    btn.classList.toggle('active');
  });
});
let backToTop = document.getElementById('backToTop');

let showIcon = () => {
  backToTop.style.opacity = 1; 
  clearTimeout(backToTop.timer);
  backToTop.timer = setTimeout(() => {
    backToTop.style.opacity = 0; 
  }, 1000); 
};

window.addEventListener('scroll', showIcon);

window.addEventListener('load', () => {
  backToTop.style.opacity = 0;
});

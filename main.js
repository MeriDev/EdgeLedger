// Footer Year
const year = document.querySelector('#date');
year.innerHTML = new Date().getFullYear();

// Sticky navigation
const nav = document.querySelector('#navbar');

window.addEventListener('scroll', function () {
  if (window.scrollY > 150) {
    nav.style.opacity = 0.9;
  } else {
    nav.style.opacity = 1;
  }
})
// Sticky navigation
const scrollLinks = document.querySelectorAll('.scroll-link');
scrollLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const id = e.target.getAttribute('href').slice(1);
    const element = document.getElementById(id);
    let position;
    if (window.innerWidth > 768) {
      position = element.offsetTop - 65;
    } else {
      position = element.offsetTop - 111;
    }
    window.scrollTo({
      left: 0,
      top: position,
      behavior: 'smooth'
    })
  })
});
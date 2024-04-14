import './styles.scss'

const mySticky = document.querySelector(".nav")
const observer = new IntersectionObserver( 
    ([e]) => e.target.classList.toggle("is-pinned", e.intersectionRatio < 1),
    { threshold: [1] }
  );
  
  observer.observe(mySticky);


// Initialize AOS Library
AOS.init({
    duration: 1200,
    once: true,
  });
  
  // Sticky Navbar on Scroll
  window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.pageYOffset > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
  
  // Lazy Load Images
  document.addEventListener("DOMContentLoaded", function() {
    const lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));
    if ("IntersectionObserver" in window) {
      let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            const lazyImage = entry.target;
            lazyImage.src = lazyImage.dataset.src;
            lazyImage.classList.remove("lazy");
            lazyImageObserver.unobserve(lazyImage);
          }
        });
      });
      lazyImages.forEach(function(lazyImage) {
        lazyImageObserver.observe(lazyImage);
      });
    }
  });
  
// Initialize Swiper
var swiper = new Swiper('.testimonials-slider .swiper-container', {
  loop: true,
  speed: 1000,
  autoplay: {
    delay: 3000,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    // when window width is >= 768px
    768: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // when window width is >= 992px
    992: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
  },
});


  
  // Isotope for Portfolio Filtering
  var iso;
  document.addEventListener('DOMContentLoaded', function() {
    const portfolioContainer = document.querySelector('.portfolio-container');
    iso = new Isotope(portfolioContainer, {
      itemSelector: '.portfolio-item',
      layoutMode: 'fitRows'
    });
  
    const filters = document.querySelectorAll('.portfolio-filters .btn');
    filters.forEach(function(btn) {
      btn.addEventListener('click', function() {
        const filterValue = btn.getAttribute('data-filter');
        iso.arrange({ filter: filterValue });
        filters.forEach(function(button) {
          button.classList.remove('active');
        });
        btn.classList.add('active');
      });
    });
  });
  
  // Form Validation
  const form = document.querySelector('form');
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    // Simple validation
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();
    if (name && email && subject && message) {
      // Process form submission
      alert('Thank you for contacting us!');
      form.reset();
    } else {
      alert('Please fill in all fields.');
    }
  });
  


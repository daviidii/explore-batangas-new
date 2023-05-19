const swiper = new Swiper('#swiper-main', {
    slidesPerView: 3.5,
    direction: 'horizontal',
    lazyloading: true,
    loop: true,
  
    // Navigation arrows
    navigation: {
      nextEl: '.carousel-nav__btn--next',
      prevEl: '.carousel-nav__btn--prev',
    },
});

const swiper_overview = new Swiper('#swiper-overview', {
    slidesPerView: 1.5,
    centeredSlides: true,
    direction: 'horizontal',
    loop: true,
    lazyloading: true,
    speed: 800,

      keyboard: {
        enabled: true,
      },

      navigation: {
        nextEl: '.carousel-nav__btn--next',
        prevEl: '.carousel-nav__btn--prev',
      },
});

// HEADER NAV STICKY
window.addEventListener("scroll", function() {
  const container_nf = this.document.querySelector('.container-nf');
  const container_f = this.document.querySelector('.container-f');
  const scroll_up = this.document.querySelector('.scroll-up');

  container_nf.classList.toggle('not-active', window.scrollY > 0);
  container_f.classList.toggle('active', window.scrollY > 0);
  scroll_up.classList.toggle('active', window.scrollY > 100);
});


const allLinks = document.querySelectorAll('.nav__menu-links');
allLinks.forEach(function(link){
  link.addEventListener('click', function(e){

    const href = link.getAttribute('href');

    // Only prevent default for links with a hash value
    if (href !== null && href.startsWith('#')) {
      e.preventDefault();
    }

    // ------- SCROLL UP ---------------------------//

    if (href === "#") window.scrollTo({
      top: 0, behavior: "smooth"
    });

    // ------- SCROLL TO OTHER SECTION -------------//

    if (href !== "#" && href.startsWith('#')){
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({
        behavior: 'smooth',
      });
    }
  });
});

//Lazy Load
function observeImg() {
const allImg = document.querySelectorAll('[lazy-src]');

function preloadImg(img) {
  const src = img.getAttribute('lazy-src');
  if(!src){
    return;
  }else {
    img.setAttribute('src', src);
    img.classList.add('img-fade-in');
  }
}

const options = {
  threshold: 0,
  rootMargin: '0px 0px 100px 0px',
};


  const imgObserver = new IntersectionObserver((entries, imgObserver) => {
    entries.forEach(entry => {
      if(!entry.isIntersecting){
        return;
      }
      else {
        preloadImg(entry.target);
        imgObserver.unobserve(entry.target);
      }
    })
  }, options);
  
  allImg.forEach(image =>{
    imgObserver.observe(image);
  });
}

// FILTER BUTTONS
function filterBtn(){
  const allItems = document.querySelectorAll('.card-gallery__card');
  const allBtns = document.querySelectorAll('.filter__btn');
  
  window.addEventListener('DOMContentLoaded', () => {
      allBtns[0].classList.add('active-filter-btn');
  });
  
  allBtns.forEach((btn) => {
    const href = btn.getAttribute('href');
      btn.addEventListener('click', (e) => {
          if(href !== null && href.startsWith('#')){
            e.preventDefault();
          }
          showFilteredContent(btn);
      });
  });
  
  function showFilteredContent(btn){
      allItems.forEach((item) => {
          if(item.classList.contains(btn.id)){
              resetActiveBtn();
              btn.classList.add('active-filter-btn');
              fadeIn(item);
          } else {
              fadeOut(item);
          }
      });
  }
  
  function resetActiveBtn(){
      allBtns.forEach((btn) => {
          btn.classList.remove('active-filter-btn');
      });
  }

  
  function fadeIn(element) {
    element.style.opacity = 0;
    element.style.display = 'block';

    const fadeEffect = setInterval(() => {
      if (element.style.opacity < 1) {
        element.style.opacity = Number(element.style.opacity) + 0.1;
      } else {
        clearInterval(fadeEffect);
      }
    }, 30);
  }

  function fadeOut(element) {
    let opacity = 1;
    const fadeEffect = setInterval(() => {
      if (opacity > 0) {
        opacity -= 0.1;
        element.style.opacity = opacity;
      } else {
        clearInterval(fadeEffect);
        element.style.display = 'none';
      }
    }, 30);
  }
}




function generateMarkup(type) {
fetch('./places.json')
.then(response => response.json())
.then(data => {
  const placesData = [];

  for (const item of data) {
    const keys = Object.keys(item);
    placesData.push(...item[keys[0]]);
  }
    function placeTemplate(places) {
      const placesType = places.type || [];
      const typeClasses = placesType.map(type => `${type}`).join(' ');
        return `
        <div class="card-gallery__card ${typeClasses}">
            <a href="#popup" class="card-gallery__link" id="${places.id}">
                <figure class="card-gallery__figure">
                    <img class="card-gallery__img "lazy-src="${places.photo}" alt="Image of ${places.name}">
                    <figcaption class="card-gallery__caption card-gallery__caption--bottom">
                        <h1 class="heading-primary heading-primary--place-caption">
                           ${places.district}
                        </h1>
                        <h1 class="heading-primary heading-primary--place-caption">
                            ${places.name}
                        </h1>
                    </figcaption>
                    <div class="dark-overlay dark-overlay--home"></div>
                    <div class="bottom-overlay"></div>
                </figure>
            </a>
        </div>
        `;
    }

    
    const cardContainer = document.getElementById("card-gallery-container");
    const filteredPlacesData = placesData.filter(place => place.type.includes(type));
    cardContainer.innerHTML = filteredPlacesData.map(placeTemplate).join("");
    observeImg();
    filterBtn();

    
    // FOR EACH POPUP MODALS
    const galleryLinks = document.querySelectorAll('.card-gallery__link');
    galleryLinks.forEach(link => {
      link.addEventListener('click', function(event) {
        const linkId = this.getAttribute('id');
        
        const object = placesData.find(obj => obj.id === linkId); 
        const modalContainer = document.getElementById('popup');
        modalTemp = `
        <div class="popup__content">
          <div class="popup__left">
            <img src="${object.photo}" alt="" class="popup__img">
            <img src="${object.photo2}" alt="" class="popup__img">
          </div>
          <div class="popup__right">
            <a href="#card-gallery-container" class="popup__close">&times;</a>
            <h2 class="heading-primary heading-primary--popup">${object.name}</h2>
            <p class="paragraph paragraph--popup-terms">Important &dash; Please read the terms and conditions before booking</p>
            <p class="paragraph paragraph--popup-info">
              ${object.info}
            </p>
          </div>
        </div>
        `

        modalContainer.innerHTML = modalTemp;
      });
    });
  });
}



observeImg();




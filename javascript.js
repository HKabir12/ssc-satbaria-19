function toggleDetails(button) {
  const overlay = button.closest(".card").querySelector(".details-overlay");
  overlay.style.opacity = overlay.style.opacity === "1" ? "0" : "1";
}

let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const dotsContainer = document.querySelector(".dots");
let autoSlideInterval;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
    dots[i].classList.toggle("active", i === index);
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

function createDots() {
  slides.forEach((_, index) => {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    if (index === 0) dot.classList.add("active");
    dot.addEventListener("click", () => {
      currentSlide = index;
      showSlide(index);
      resetAutoSlide();
    });
    dotsContainer.appendChild(dot);
  });
}

function startAutoSlide() {
  autoSlideInterval = setInterval(nextSlide, 4000);
}

function resetAutoSlide() {
  clearInterval(autoSlideInterval);
  startAutoSlide();
}

document.getElementById("nextBtn1").addEventListener("click", () => {
  nextSlide();
  resetAutoSlide();
});
document.getElementById("prevBtn1").addEventListener("click", () => {
  prevSlide();
  resetAutoSlide();
});
createDots();
const dots = document.querySelectorAll(".dot");
startAutoSlide();

///slider
const cards = document.querySelectorAll('.card');
        const cardWrapper = document.getElementById('cardWrapper');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        const itemsPerPage = 8;
        let currentIndex = 0;
    
        function showCards() {
            cardWrapper.innerHTML = '';
            for (let i = currentIndex; i < currentIndex + itemsPerPage; i++) {
                if (cards[i]) {
                    cardWrapper.appendChild(cards[i]);
                }
            }
        }
    
        prevBtn.addEventListener('click', () => {
            if (currentIndex > 0) {
                currentIndex -= itemsPerPage;
                showCards();
            }
        });
    
        nextBtn.addEventListener('click', () => {
            if (currentIndex + itemsPerPage < cards.length) {
                currentIndex += itemsPerPage;
                showCards();
            }
        });
    
        showCards();
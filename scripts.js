let currentIndex = 0;
let startX = 0;
let isSwiping = false;

const carousel = document.getElementById('carousel');
const totalItems = document.querySelectorAll('.product-card').length;
const itemWidth = document.querySelector('.product-card').offsetWidth + 20; 

// Función para mover el carrusel usando botones
function moveCarousel(direction) {
    currentIndex += direction;

    // Si llegamos al final, volvemos al principio (y viceversa)
    if (currentIndex<0) currentIndex = totalItems - 1;
    if (currentIndex>=totalItems) currentIndex = 0;

    const offset = -currentIndex * itemWidth;
    carousel.style.transform = `translateX(${offset}px)`;
}

// Manejo de eventos táctiles para swipe
carousel.addEventListener('touchstart', function(e) {
    startX = e.touches[0].clientX;
    isSwiping = true;
});

carousel.addEventListener('touchmove', function(e) {
    if (!isSwiping) return;

    const moveX = e.touches[0].clientX;
    const diff = startX - moveX;

    // Si se mueve a la derecha (deslizar a la izquierda), o a la izquierda (deslizar a la derecha)
    if (diff > 30) { // Se movió lo suficiente a la derecha
        moveCarousel(1); // Mover a la derecha
        isSwiping = false;
    } else if (diff < -30) { // Se movió lo suficiente a la izquierda
        moveCarousel(-1); // Mover a la izquierda
        isSwiping = false;
    }
});

carousel.addEventListener('touchend', function() {
    isSwiping = false;
});

// script.js
document.addEventListener('DOMContentLoaded', () => {
    const row = document.querySelector('.scroll-row');
    const cards = row.children;
    
    // Clone the cards and append to the row
    Array.from(cards).forEach(card => {
        const clone = card.cloneNode(true);
        row.appendChild(clone);
    });
});






document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll('.card');
    const lid = document.querySelector('.lid');
    let currentCardIndex = 0; // Track the current card index
  
    // Open the lid first
    lid.style.animation = 'open 0.5s forwards';
  
    // After the lid opens, show the first card
    lid.addEventListener('animationend', function() {
      showNextCard(); // Show the first card
    });
  
    // Function to show the next card
    function showNextCard() {
      if (currentCardIndex < cards.length) {
        const card = cards[currentCardIndex];
        card.classList.add('show'); // Add the show class to make it visible
        currentCardIndex++; // Move to the next card
      }
    }
  
    // Add click event to each card to show the next one
    cards.forEach(card => {
      card.addEventListener('click', showNextCard);
    });
  });
  
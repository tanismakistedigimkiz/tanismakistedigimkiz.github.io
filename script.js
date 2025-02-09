document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('container');
  const cards = document.querySelectorAll('.card');
  let currentCardIndex = 0;

  // Function to show the next card
  function showNextCard() {
    if (currentCardIndex < cards.length) {
      cards[currentCardIndex].style.display = 'flex'; // Show the current card
      currentCardIndex++;
    } else {
      // Reset to show cards again if needed
      currentCardIndex = 0;
      cards.forEach(card => card.style.display = 'none'); // Hide all cards
    }
  }

  // Add click event to the container
  container.addEventListener('click', showNextCard);
});

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('container');
    const cards = document.querySelectorAll('.card');
    let currentCardIndex = 0;

    // Show only the first card initially
    cards.forEach((card, index) => {
        card.style.display = index === 0 ? 'flex' : 'none'; // Show only the first card
    });

    // Function to show next card
    function showNextCard() {
        cards[currentCardIndex].style.display = 'none'; // Hide the current card
        currentCardIndex++; // Move to the next card

        if (currentCardIndex < cards.length) {
            cards[currentCardIndex].style.display = 'flex'; // Show the next card
        } else {
            // Reset to show the first card again
            currentCardIndex = 0;
            cards[currentCardIndex].style.display = 'flex'; // Show the first card
        }
    }

    // Add click event to the container
    container.addEventListener('click', showNextCard);

    // Add hover event to the container to control card visibility
    container.addEventListener('mouseenter', () => {
        cards.forEach(card => card.style.visibility = 'visible'); // Show cards when hovered
    });

    container.addEventListener('mouseleave', () => {
        cards.forEach(card => card.style.visibility = 'hidden'); // Hide cards when not hovered
        cards[0].style.display = 'flex'; // Show the first card again
        currentCardIndex = 0; // Reset index to the first card
    });
});

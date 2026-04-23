document.addEventListener('DOMContentLoaded', function() {
    const birthdayDate = new Date('April 24, 2026 00:00:00').getTime();
    const countdownContainer = document.getElementById('countdown');
    const startButton = document.getElementById('play');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = birthdayDate - now;

        if (distance <= 0) {
            // It's birthday time!
            countdownContainer.style.display = 'none';
            startButton.style.display = 'block';
            clearInterval(timerInterval);
            return;
        }

        // Time calculations
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display results
        hoursEl.innerText = hours.toString().padStart(2, '0');
        minutesEl.innerText = minutes.toString().padStart(2, '0');
        secondsEl.innerText = seconds.toString().padStart(2, '0');
    }

    const timerInterval = setInterval(updateCountdown, 1000);
    updateCountdown(); // Run immediately
});

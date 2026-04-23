document.addEventListener('DOMContentLoaded', function() {
    const container = document.body;

    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('floating-heart');
        heart.innerHTML = '❤️';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = Math.random() * 3 + 3 + 's';
        heart.style.opacity = Math.random();
        heart.style.fontSize = Math.random() * 20 + 10 + 'px';
        
        container.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 6000);
    }

    function createFlower() {
        const flower = document.createElement('div');
        flower.classList.add('floating-flower');
        const flowers = ['🌸', '🌺', '🌹', '🌷', '🌼'];
        flower.innerHTML = flowers[Math.floor(Math.random() * flowers.length)];
        flower.style.left = Math.random() * 100 + 'vw';
        flower.style.animationDuration = Math.random() * 4 + 4 + 's';
        flower.style.opacity = Math.random();
        flower.style.fontSize = Math.random() * 20 + 15 + 'px';
        
        container.appendChild(flower);

        setTimeout(() => {
            flower.remove();
        }, 8000);
    }

    // Start creating decorations after a small delay
    setTimeout(() => {
        setInterval(createHeart, 300);
        setInterval(createFlower, 500);
    }, 2000);

    // Heart Cursor Trail
    document.addEventListener('mousemove', function(e) {
        if (Math.random() > 0.1) return; // Only create hearts occasionally to avoid clutter

        const heartTrail = document.createElement('div');
        heartTrail.classList.add('heart-trail');
        heartTrail.innerHTML = '❤️';
        heartTrail.style.left = e.pageX + 'px';
        heartTrail.style.top = e.pageY + 'px';
        
        container.appendChild(heartTrail);

        setTimeout(() => {
            heartTrail.remove();
        }, 1000);
    });

    // Make balloons and flowers interactive (poppable)
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('floating-heart') || e.target.classList.contains('floating-flower')) {
            const target = e.target;
            target.style.transform = 'scale(2)';
            target.style.opacity = '0';
            target.innerHTML = '✨'; // Sparkle effect on pop
            setTimeout(() => target.remove(), 200);
        }
    });
});

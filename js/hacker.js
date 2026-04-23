document.addEventListener('DOMContentLoaded', function() {
    const hackerBtn = document.getElementById('hacker-btn');
    const terminal = document.getElementById('hacker-terminal');
    const terminalContent = document.getElementById('terminal-content');
    const matrixCanvas = document.getElementById('matrix-canvas');
    const ctx = matrixCanvas.getContext('2d');
    let hackerActive = false;

    // Matrix Rain Setup
    let columns;
    let drops = [];
    const chars = "PALLABI01HACKERLOVE❤️";
    const fontSize = 16;

    function initMatrix() {
        matrixCanvas.width = window.innerWidth;
        matrixCanvas.height = window.innerHeight;
        columns = matrixCanvas.width / fontSize;
        drops = [];
        for (let x = 0; x < columns; x++) {
            drops[x] = 1;
        }
    }

    function drawMatrix() {
        ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
        ctx.fillRect(0, 0, matrixCanvas.width, matrixCanvas.height);

        ctx.fillStyle = "#0F0";
        ctx.font = fontSize + "px monospace";

        for (let i = 0; i < drops.length; i++) {
            const text = chars.charAt(Math.floor(Math.random() * chars.length));
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);

            if (drops[i] * fontSize > matrixCanvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }

    let matrixInterval;

    function toggleHackerMode() {
        hackerActive = !hackerActive;
        if (hackerActive) {
            hackerBtn.innerText = "Digital Universe: ON";
            hackerBtn.classList.add('active');
            document.body.classList.add('hacker-theme');
            terminal.style.display = 'block';
            matrixCanvas.style.display = 'block';
            initMatrix();
            matrixInterval = setInterval(drawMatrix, 33);
            startTerminalTyping();
            $('.click-hint').fadeOut();
        } else {
            hackerBtn.innerText = "Digital Universe: OFF";
            hackerBtn.classList.remove('active');
            document.body.classList.remove('hacker-theme');
            terminal.style.display = 'none';
            matrixCanvas.style.display = 'none';
            clearInterval(matrixInterval);
            terminalContent.innerHTML = '';
        }
    }

    hackerBtn.addEventListener('click', toggleHackerMode);

    window.addEventListener('resize', initMatrix);

    const wishes = [
        "> Initializing birthday protocol...",
        "> Decrypting special messages for Pallabi Gogoi...",
        "> -----------------------------------------",
        "> Access Granted!",
        "> [SUCCESS] Happiness levels set to MAX",
        "> [SUCCESS] Achievement Unlocked: Another Awesome Year",
        "> [HACK] Redirecting all luck and joy to Pallabi's address...",
        "> -----------------------------------------",
        "> Happy Birthday, Pallabi Gogoi!",
        "> May your source code always be bug-free.",
        "> May your life's frequency be perfectly tuned.",
        "> Keep hacking the world with your smile! ❤️"
    ];

    function startTerminalTyping() {
        terminalContent.innerHTML = '';
        let lineIndex = 0;
        
        function typeLine() {
            if (lineIndex < wishes.length) {
                const line = document.createElement('p');
                line.className = 'terminal-line';
                terminalContent.appendChild(line);
                
                let charIndex = 0;
                const text = wishes[lineIndex];
                
                function typeChar() {
                    if (charIndex < text.length) {
                        line.innerHTML += text.charAt(charIndex);
                        charIndex++;
                        setTimeout(typeChar, 30);
                    } else {
                        lineIndex++;
                        setTimeout(typeLine, 200);
                    }
                    terminalContent.scrollTop = terminalContent.scrollHeight;
                }
                typeChar();
            }
        }
        typeLine();
    }

    // Show hacker toggle after start
    $('#play').click(function() {
        setTimeout(() => {
            $('.hacker-toggle').fadeIn();
        }, 3000);
    });
});

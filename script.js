// ================================
// OFFICIAL CLAIM RECORD - JAVASCRIPT
// ================================

// 1. Open Official Record button
const openRecordButton = document.querySelector(".official-button");
const recordSection = document.querySelector(".record");

if (openRecordButton && recordSection) {
    openRecordButton.addEventListener("click", () => {
        recordSection.scrollIntoView({
            behavior: "smooth"
        });
    });
}


// 2. Falling cute official-record emojis
const emojiContainer = document.getElementById("emoji-container");

const emojis = ["♡", "💚", "✨", "🌿", "♡", "💚", "👀"];

function createFallingEmoji() {
    if (!emojiContainer) return;

    const emoji = document.createElement("span");

    emoji.classList.add("falling-emoji");
    emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];

    emoji.style.left = Math.random() * 100 + "vw";
    emoji.style.animationDuration = (6 + Math.random() * 6) + "s";
    emoji.style.animationDelay = Math.random() * 2 + "s";
    emoji.style.fontSize = (12 + Math.random() * 14) + "px";

    emojiContainer.appendChild(emoji);

    setTimeout(() => {
        emoji.remove();
    }, 14000);
}

setInterval(createFallingEmoji, 900);


// 3. Official claim verification
function verifyClaim() {
    const result = document.getElementById("verificationResult");

    if (!result) return;

    result.innerHTML = "Accessing official records...";

    setTimeout(() => {
        result.innerHTML = "Checking subject...";
    }, 900);

    setTimeout(() => {
        result.innerHTML = "Checking claim date...";
    }, 1800);

    setTimeout(() => {
        result.innerHTML = "Checking permanence clause...";
    }, 2700);

    setTimeout(() => {
        result.innerHTML = "Checking Tapir documentation... 👀";
    }, 3600);

    setTimeout(() => {
        result.innerHTML = `
            <strong>✓ CLAIM VERIFIED</strong>
            <br><br>
            ADAN IS HER BBY.
            <br>
            CLAIM STATUS: PERMANENT
            <br>
            EXPIRATION: NEVER
        `;

        result.classList.add("verified");
    }, 4700);
}


// 4. Tiny photo interaction
const evidencePhotos = document.querySelectorAll(".evidence-card img");

evidencePhotos.forEach((photo) => {
    photo.addEventListener("click", () => {
        photo.classList.toggle("photo-active");
    });
});

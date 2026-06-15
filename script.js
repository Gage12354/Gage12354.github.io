// Creates decoding title effect
(async function() {    
    const title = document.getElementById("titlebar");

    const finalText = "Gage Moore";
    let text = "*/3$ %&1+0";
    title.textContent = text;

    while (text != finalText)
    {
        await delay(40);

        for (let i=0; i < text.length; i++)
        {
            if (text.charCodeAt(i) < finalText.charCodeAt(i))
            {
                text = replaceAt(text, i, String.fromCharCode(text.charCodeAt(i)+1));
            }
        }

        title.textContent = text;
    }

    document.getElementById("title-container").classList.toggle("titleBarFade");

})();

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function replaceAt(str, index, replacement) {
    return str.substring(0, index) + replacement + str.substring(index + 1);
}

// Creates background star effect
(async function() {
    const background = document.getElementById("stars-background");

    for (let i = 0; i < 100; i++) {
        const star = document.createElement("div");
        star.classList.add("star");

        const size = Math.random() * 3;

        star.style.width = `${size}px`;
        star.style.height = `${size}px`;

        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;

        star.style.animationDuration = `${20 + Math.random() * 30}s`;
        
        background.appendChild(star);
    }

})();


// Orb expansion effect
(async function() {
    const skillsRow = document.getElementById("skills-row");
    const orbs = document.querySelectorAll(".orb");

    orbs.forEach((orb) => {
        orb.addEventListener("click", () => {
            const wasActive =
                orb.classList.contains("active");

            orbs.forEach((o) => {
                o.classList.remove("active");
            });

            skillsRow.classList.remove("active-mode");

            // Re-enable if user clicked a different orb
            if (!wasActive) {

                orb.classList.add("active");

                skillsRow.classList.add("active-mode");
            }
        });

    });
})();


function openPage(pageUrl){
        window.open(pageUrl);
    }
// ==========================================
// ELEMENTS
// ==========================================

const beginBtn =
    document.getElementById("beginBtn");

const backgroundMusic =
    document.getElementById("backgroundMusic");

const musicToggle =
    document.getElementById("musicToggle");


// ==========================================
// MUSIC SETTINGS
// ==========================================

backgroundMusic.volume = 0.45;


// ==========================================
// START MUSIC
// ==========================================

function startMusic() {

    if (!backgroundMusic.paused) {
        return;
    }

    backgroundMusic.play()
        .then(function () {

            musicToggle.classList.add(
                "playing"
            );

            musicToggle.textContent = "♫";

            console.log(
                "Memory music started"
            );

        })
        .catch(function (error) {

            console.log(
                "Browser blocked autoplay:",
                error
            );

        });
}


// ==========================================
// TRY TO PLAY WHEN PAGE OPENS
// ==========================================

window.addEventListener(
    "load",
    function () {

        startMusic();

    }
);


// ==========================================
// START MUSIC AFTER FIRST INTERACTION
// ==========================================

function firstInteraction() {

    startMusic();

    document.removeEventListener(
        "pointerdown",
        firstInteraction
    );

    document.removeEventListener(
        "keydown",
        firstInteraction
    );
}


document.addEventListener(
    "pointerdown",
    firstInteraction
);

document.addEventListener(
    "keydown",
    firstInteraction
);


// ==========================================
// MUSIC BUTTON
// ==========================================

musicToggle.addEventListener(
    "click",
    function (event) {

        event.stopPropagation();

        if (backgroundMusic.paused) {

            startMusic();

        } else {

            backgroundMusic.pause();

            musicToggle.classList.remove(
                "playing"
            );

            musicToggle.textContent = "♪";
        }

    }
);


// ==========================================
// BEGIN BUTTON
// ==========================================

beginBtn.addEventListener(
    "click",
    function () {

        // Make absolutely sure music is playing
        startMusic();


        const page =
            document.querySelector(
                ".opening-page"
            );

        page.classList.add(
            "fade-out"
        );


        setTimeout(
            function () {

                window.location.href =
                    "pages/memories.html";

            },
            1200
        );

    }
);
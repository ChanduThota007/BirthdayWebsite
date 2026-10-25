// ==========================================
// BACKGROUND MUSIC
// ==========================================

const backgroundMusic =
    document.getElementById("backgroundMusic");

const musicToggle =
    document.getElementById("musicToggle");

backgroundMusic.volume = 0.5;


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

            console.log(
                "Birthday music started"
            );

        })
        .catch(function (error) {

            console.log(
                "Birthday music waiting for interaction:",
                error
            );

        });
}


// ==========================================
// TRY MUSIC ON PAGE LOAD
// ==========================================

startMusic();


// ==========================================
// START MUSIC ON FIRST INTERACTION
// ==========================================

function startMusicOnInteraction(event) {

    if (
        event &&
        event.target === musicToggle
    ) {
        return;
    }

    startMusic();

    document.removeEventListener(
        "pointerdown",
        startMusicOnInteraction
    );

    document.removeEventListener(
        "keydown",
        startMusicOnInteraction
    );
}


document.addEventListener(
    "pointerdown",
    startMusicOnInteraction
);

document.addEventListener(
    "keydown",
    startMusicOnInteraction
);


// ==========================================
// MUSIC BUTTON
// ==========================================

musicToggle.addEventListener(
    "click",
    function () {

        if (backgroundMusic.paused) {

            startMusic();

        } else {

            backgroundMusic.pause();

            musicToggle.classList.remove(
                "playing"
            );

        }

    }
);


// ==========================================
// GET MIDNIGHT CONTENT
// ==========================================

const content =
    birthdayContent.midnight;


// ==========================================
// OPENING
// ==========================================

document.querySelector(
    ".midnight-time"
).textContent =
    content.openingTime;


document.querySelector(
    ".midnight-opening h1"
).textContent =
    content.openingText;


// ==========================================
// MESSAGE
// ==========================================

document.querySelector(
    ".message-section .section-label"
).textContent =
    content.message.label;


document.querySelector(
    ".message-section h2"
).innerHTML =
    content.message.title;


document.querySelector(
    ".message"
).textContent =
    content.message.text;


// ==========================================
// SPECIAL PHOTO
// ==========================================

const specialPhoto =
    document.querySelector(
        ".photo-wrapper img"
    );


specialPhoto.src =
    "../" + content.photo.image;


specialPhoto.alt =
    content.photo.caption;


document.querySelector(
    ".photo-caption"
).textContent =
    content.photo.caption;


// ==========================================
// CUTE SECTION
// ==========================================

document.querySelector(
    ".cute-section .section-label"
).textContent =
    content.cute.label;


document.querySelector(
    ".cute-section h2"
).innerHTML =
    content.cute.title;


document.querySelector(
    ".cute-text"
).textContent =
    content.cute.text;


// ==========================================
// PLAYFUL SECTION
// ==========================================

document.querySelector(
    ".playful-small"
).textContent =
    content.playful.smallText;


document.querySelector(
    ".playful-section h2"
).innerHTML =
    content.playful.title;


document.querySelector(
    "#continueBtn"
).textContent =
    content.playful.button;


document.querySelector(
    "#playfulReveal"
).textContent =
    content.playful.reveal;


// ==========================================
// FINAL PHOTO
// ==========================================

document.querySelector(
    ".final-intro"
).textContent =
    content.final.intro;


const finalPhoto =
    document.querySelector(
        ".final-photo img"
    );


finalPhoto.src =
    "../" + content.final.image;


finalPhoto.alt =
    content.final.intro;


// ==========================================
// BIRTHDAY SECTION
// ==========================================

document.querySelector(
    ".birthday-section .section-label"
).textContent =
    content.birthday.label;


document.querySelector(
    ".birthday-section h1"
).innerHTML =
    content.birthday.title;


document.querySelector(
    ".birthday-message"
).textContent =
    content.birthday.message;


// ==========================================
// ENDING
// ==========================================

document.querySelector(
    ".ending-section p"
).textContent =
    content.ending.text;


document.querySelector(
    ".ending-section span"
).textContent =
    content.ending.subtext;


// ==========================================
// YEAR
// ==========================================

const yearElement =
    document.getElementById("year");

yearElement.textContent =
    new Date().getFullYear();


// ==========================================
// PLAYFUL BUTTON
// ==========================================

const continueBtn =
    document.getElementById("continueBtn");

const playfulReveal =
    document.getElementById("playfulReveal");


continueBtn.addEventListener(
    "click",
    function () {

        playfulReveal.classList.add(
            "show"
        );

        continueBtn.textContent =
            "I KNEW IT";

    }
);


// ==========================================
// PHOTO VIEWER
// ==========================================

const photoViewer =
    document.getElementById("photoViewer");

const photoViewerImage =
    document.getElementById("photoViewerImage");

const photoViewerClose =
    document.getElementById("photoViewerClose");


// ==========================================
// OPEN PHOTO VIEWER
// ==========================================

function openPhotoViewer(photo) {

    photoViewerImage.src =
        photo.src;

    photoViewerImage.alt =
        photo.alt ||
        "Memory";


    photoViewer.classList.add(
        "active"
    );


    document.body.classList.add(
        "photo-viewer-open"
    );
}


// ==========================================
// CLOSE PHOTO VIEWER
// ==========================================

function closePhotoViewer() {

    photoViewer.classList.remove(
        "active"
    );


    document.body.classList.remove(
        "photo-viewer-open"
    );


    setTimeout(
        function () {

            photoViewerImage.src =
                "";

        },
        350
    );
}


// ==========================================
// SPECIAL PHOTO CLICK
// ==========================================

specialPhoto.addEventListener(
    "click",
    function () {

        openPhotoViewer(
            specialPhoto
        );

    }
);


// ==========================================
// FINAL PHOTO CLICK
// ==========================================

finalPhoto.addEventListener(
    "click",
    function () {

        openPhotoViewer(
            finalPhoto
        );

    }
);


// ==========================================
// CLOSE BUTTON
// ==========================================

photoViewerClose.addEventListener(
    "click",
    function () {

        closePhotoViewer();

    }
);


// ==========================================
// CLICK OUTSIDE PHOTO
// ==========================================

photoViewer.addEventListener(
    "click",
    function (event) {

        if (
            event.target === photoViewer
        ) {

            closePhotoViewer();

        }

    }
);


// ==========================================
// ESCAPE KEY
// ==========================================

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Escape"
        ) {

            closePhotoViewer();

        }

    }
);
// ==========================================
// GET MIDNIGHT CONTENT
// ==========================================

const content = birthdayContent.midnight;


// ==========================================
// MIDNIGHT OPENING
// ==========================================

document.querySelector(".midnight-time").textContent =
    content.openingTime;

document.querySelector(".midnight-opening h1").textContent =
    content.openingText;


// ==========================================
// MESSAGE SECTION
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
    document.querySelector(".photo-wrapper img");

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
    document.querySelector(".final-photo img");

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
// CURRENT YEAR
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

        playfulReveal.classList.add("show");

        continueBtn.textContent =
            "I KNEW IT";

    }
);


// ==========================================
// PHOTO FULLSCREEN VIEWER
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
        photo.alt || "Memory";

    photoViewer.classList.add("active");

    document.body.classList.add(
        "photo-viewer-open"
    );

}


// ==========================================
// CLOSE PHOTO VIEWER
// ==========================================

function closePhotoViewer() {

    photoViewer.classList.remove("active");

    document.body.classList.remove(
        "photo-viewer-open"
    );

    setTimeout(function () {

        photoViewerImage.src = "";

    }, 350);

}


// ==========================================
// SPECIAL PHOTO CLICK
// ==========================================

specialPhoto.addEventListener(
    "click",
    function () {

        openPhotoViewer(specialPhoto);

    }
);


// ==========================================
// FINAL PHOTO CLICK
// ==========================================

finalPhoto.addEventListener(
    "click",
    function () {

        openPhotoViewer(finalPhoto);

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
// ESC KEY
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
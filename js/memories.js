// ==========================================
// BACKGROUND MUSIC
// ==========================================

const backgroundMusic =
    document.getElementById("backgroundMusic");

const musicToggle =
    document.getElementById("musicToggle");

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

            console.log(
                "Memory music started"
            );

        })
        .catch(function (error) {

            console.log(
                "Music waiting for user interaction:",
                error
            );

        });
}


// ==========================================
// TRY MUSIC WHEN PAGE LOADS
// ==========================================

startMusic();


// ==========================================
// START MUSIC ON USER INTERACTION
// ==========================================

function startMusicOnInteraction(event) {

    // Don't interfere with the music button
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
// GET MEMORY CONTENT
// ==========================================

const memoriesContent =
    birthdayContent.memories;


// ==========================================
// GET HTML ELEMENTS
// ==========================================

const memoryGrid =
    document.getElementById("memoryGrid");

const memoryBackground =
    document.getElementById("memoryBackground");

const memoryTitle =
    document.getElementById("memoryTitle");

const smallTitle =
    document.getElementById("smallTitle");

const memorySubtitle =
    document.getElementById("memorySubtitle");


const viewer =
    document.getElementById("viewer");

const viewerMedia =
    document.getElementById("viewerMedia");

const viewerCaption =
    document.getElementById("viewerCaption");

const viewerDate =
    document.getElementById("viewerDate");

const viewerClose =
    document.getElementById("viewerClose");

const viewerPrev =
    document.getElementById("viewerPrev");

const viewerNext =
    document.getElementById("viewerNext");


// ==========================================
// PAGE CONTENT
// ==========================================

memoryTitle.textContent =
    memoriesContent.title;

smallTitle.textContent =
    memoriesContent.smallTitle;

memorySubtitle.textContent =
    memoriesContent.subtitle;


// ==========================================
// BACKGROUND
// ==========================================

memoryBackground.style.backgroundImage =
    `url("../${memoriesContent.background}")`;


// ==========================================
// ALL MEMORIES
// ==========================================
//
// This array is used by the fullscreen viewer.
//

const memories = [];

let currentIndex = 0;


// ==========================================
// CREATE YEAR SECTIONS
// ==========================================

memoriesContent.years.forEach(
    function (yearData) {


        // ==================================
        // YEAR TITLE
        // ==================================

        const yearTitle =
            document.createElement("h2");

        yearTitle.classList.add(
            "memory-year"
        );

        yearTitle.textContent =
            yearData.year;

        memoryGrid.appendChild(
            yearTitle
        );


        // ==================================
        // CREATE THIS YEAR'S MEMORIES
        // ==================================

        yearData.items.forEach(
            function (memory) {


                // ==================================
                // ADD YEAR INFORMATION
                // ==================================

                memory.year =
                    yearData.year;


                // ==================================
                // ADD MEMORY TO VIEWER ARRAY
                // ==================================

                const memoryIndex =
                    memories.length;

                memories.push(
                    memory
                );


                // ==================================
                // CREATE MEMORY CARD
                // ==================================

                const card =
                    document.createElement("div");

                card.classList.add(
                    "memory-card"
                );


                // ==================================
                // CARD SIZE
                // ==================================

                if (
                    memory.size === "large"
                ) {

                    card.classList.add(
                        "large"
                    );

                }

                else if (
                    memory.size === "wide"
                ) {

                    card.classList.add(
                        "wide"
                    );

                }


                // ==================================
                // IMAGE
                // ==================================

                if (
                    memory.type === "image"
                ) {

                    const image =
                        document.createElement("img");

                    image.src =
                        "../" + memory.image;

                    image.alt =
                        memory.caption;

                    card.appendChild(
                        image
                    );

                }


                // ==================================
                // VIDEO
                // ==================================

                else if (
                    memory.type === "video"
                ) {

                    const video =
                        document.createElement("video");

                    video.src =
                        "../" + memory.video;

                    video.muted =
                        true;

                    video.loop =
                        true;

                    video.playsInline =
                        true;

                    card.appendChild(
                        video
                    );

                }


                // ==================================
                // CARD OVERLAY
                // ==================================

                const overlay =
                    document.createElement("div");

                overlay.classList.add(
                    "memory-overlay-content"
                );


                const icon =
                    document.createElement("span");

                icon.classList.add(
                    "memory-icon"
                );

                icon.textContent =
                    "＋";


                overlay.appendChild(
                    icon
                );


                card.appendChild(
                    overlay
                );


                // ==================================
                // OPEN VIEWER
                // ==================================

                card.addEventListener(
                    "click",
                    function () {

                        openViewer(
                            memoryIndex
                        );

                    }
                );


                // ==================================
                // ADD CARD
                // ==================================

                memoryGrid.appendChild(
                    card
                );

            }
        );

    }
);


// ==========================================
// OPEN VIEWER
// ==========================================

function openViewer(index) {

    currentIndex =
        index;


    showMemory(
        currentIndex
    );


    viewer.classList.add(
        "active"
    );


    document.body.style.overflow =
        "hidden";
}


// ==========================================
// SHOW MEMORY
// ==========================================

function showMemory(index) {

    const memory =
        memories[index];


    viewerMedia.innerHTML =
        "";


    // ======================================
    // IMAGE
    // ======================================

    if (
        memory.type === "image"
    ) {

        const image =
            document.createElement("img");

        image.src =
            "../" + memory.image;

        image.alt =
            memory.caption;

        viewerMedia.appendChild(
            image
        );

    }


    // ======================================
    // VIDEO
    // ======================================

    else if (
        memory.type === "video"
    ) {

        const video =
            document.createElement("video");

        video.src =
            "../" + memory.video;

        video.controls =
            true;

        video.autoplay =
            true;

        video.playsInline =
            true;

        viewerMedia.appendChild(
            video
        );

    }


    // ======================================
    // VIEWER INFORMATION
    // ======================================

    viewerCaption.textContent =
        memory.caption;

    viewerDate.textContent =
        memory.date;
}


// ==========================================
// CLOSE VIEWER
// ==========================================

function closeViewer() {

    viewer.classList.remove(
        "active"
    );


    document.body.style.overflow =
        "";


    viewerMedia.innerHTML =
        "";
}


// ==========================================
// PREVIOUS
// ==========================================

function showPrevious() {

    currentIndex--;


    if (
        currentIndex < 0
    ) {

        currentIndex =
            memories.length - 1;

    }


    showMemory(
        currentIndex
    );
}


// ==========================================
// NEXT
// ==========================================

function showNext() {

    currentIndex++;


    if (
        currentIndex >=
        memories.length
    ) {

        currentIndex = 0;

    }


    showMemory(
        currentIndex
    );
}


// ==========================================
// BUTTON EVENTS
// ==========================================

viewerClose.addEventListener(
    "click",
    closeViewer
);


viewerPrev.addEventListener(
    "click",
    showPrevious
);


viewerNext.addEventListener(
    "click",
    showNext
);


// ==========================================
// CLICK OUTSIDE VIEWER
// ==========================================

viewer.addEventListener(
    "click",
    function (event) {

        if (
            event.target === viewer
        ) {

            closeViewer();

        }

    }
);


// ==========================================
// KEYBOARD CONTROLS
// ==========================================

document.addEventListener(
    "keydown",
    function (event) {

        if (
            !viewer.classList.contains(
                "active"
            )
        ) {

            return;

        }


        if (
            event.key === "Escape"
        ) {

            closeViewer();

        }


        if (
            event.key === "ArrowLeft"
        ) {

            showPrevious();

        }


        if (
            event.key === "ArrowRight"
        ) {

            showNext();

        }

    }
);


// ==========================================
// MIDNIGHT COUNTDOWN
// ==========================================

const countdown =
    document.getElementById("countdown");

const waitTitle =
    document.getElementById("waitTitle");

const waitText =
    document.getElementById("waitText");

const midnightBtn =
    document.getElementById("midnightBtn");


// ==========================================
// GET NEXT BIRTHDAY MIDNIGHT
// ==========================================

function getBirthdayMidnight() {

    const now =
        new Date();

    const currentYear =
        now.getFullYear();


    let birthdayMidnight =
        new Date(
            currentYear,
            9,
            26,
            0,
            0,
            0,
            0
        );


    if (
        now >= birthdayMidnight
    ) {

        birthdayMidnight =
            new Date(
                currentYear + 1,
                9,
                26,
                0,
                0,
                0,
                0
            );

    }


    return birthdayMidnight;
}


// ==========================================
// CHECK BIRTHDAY MIDNIGHT
// ==========================================

function isBirthdayMidnightActive() {

    const now =
        new Date();

    const year =
        now.getFullYear();


    const birthdayStart =
        new Date(
            year,
            9,
            26,
            0,
            0,
            0,
            0
        );


    const nextBirthdayStart =
        new Date(
            year + 1,
            9,
            26,
            0,
            0,
            0,
            0
        );


    return (
        now >= birthdayStart &&
        now < nextBirthdayStart
    );
}


// ==========================================
// UPDATE COUNTDOWN
// ==========================================

function updateCountdown() {


    // ======================================
    // MIDNIGHT HAS ARRIVED
    // ======================================

    if (
        isBirthdayMidnightActive()
    ) {

        countdown.textContent =
            "00:00:00";


        waitTitle.textContent =
            "Midnight is here. ❤️";


        waitText.textContent =
            "There's something waiting for you.";


        midnightBtn.textContent =
            "OPEN";


        midnightBtn.disabled =
            false;


        midnightBtn.classList.add(
            "active"
        );


        return;
    }


    // ======================================
    // BEFORE MIDNIGHT
    // ======================================

    const now =
        new Date();

    const birthdayMidnight =
        getBirthdayMidnight();

    const difference =
        birthdayMidnight - now;


    const hours =
        Math.floor(
            difference /
            (1000 * 60 * 60)
        );


    const minutes =
        Math.floor(
            (
                difference %
                (1000 * 60 * 60)
            ) /
            (1000 * 60)
        );


    const seconds =
        Math.floor(
            (
                difference %
                (1000 * 60)
            ) /
            1000
        );


    countdown.textContent =
        String(hours).padStart(
            2,
            "0"
        ) +
        ":" +
        String(minutes).padStart(
            2,
            "0"
        ) +
        ":" +
        String(seconds).padStart(
            2,
            "0"
        );


    waitTitle.textContent =
        "Waiting for midnight...";


    waitText.textContent =
        "There's still one more thing waiting.";


    midnightBtn.textContent =
        "WAITING...";


    midnightBtn.disabled =
        true;


    midnightBtn.classList.remove(
        "active"
    );
}


// ==========================================
// START COUNTDOWN
// ==========================================

updateCountdown();


setInterval(
    updateCountdown,
    1000
);


// ==========================================
// OPEN MIDNIGHT PAGE
// ==========================================

midnightBtn.addEventListener(
    "click",
    function () {

        if (
            !midnightBtn.disabled
        ) {

            // ==================================
            // FADE OUT MEMORY MUSIC
            // ==================================

            let volume =
                backgroundMusic.volume;


            const fadeMusic =
                setInterval(
                    function () {

                        volume -= 0.05;


                        if (
                            volume <= 0
                        ) {

                            volume = 0;

                            clearInterval(
                                fadeMusic
                            );

                            backgroundMusic.pause();

                        }


                        backgroundMusic.volume =
                            volume;

                    },
                    50
                );


            // ==================================
            // GO TO MIDNIGHT PAGE
            // ==================================

            setTimeout(
                function () {

                    window.location.href =
                        "midnight.html";

                },
                600
            );

        }

    }
);
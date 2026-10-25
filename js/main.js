const beginBtn = document.getElementById("beginBtn");

beginBtn.addEventListener("click", function () {

    const page = document.querySelector(".opening-page");

    page.classList.add("fade-out");

    setTimeout(function () {

        window.location.href = "pages/memories.html";

    }, 1200);

});
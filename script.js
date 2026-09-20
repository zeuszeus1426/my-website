const contactBtn = document.querySelector("#contactBtn");
const projectsBtn = document.querySelector("#projectsBtn");

contactBtn.addEventListener("click", function () {
    alert("Thanks for visiting my website!");
});

projectsBtn.addEventListener("click", function () {
    document.querySelector("#projects").scrollIntoView({
        behavior: "smooth"
    });
});
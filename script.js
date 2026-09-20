function showProject(projectName) {

    const popup = document.getElementById("popup");
    const popupTitle = document.getElementById("popupTitle");

    popupTitle.textContent = projectName;

    popup.style.display = "flex";
}


function closePopup() {

    const popup = document.getElementById("popup");

    popup.style.display = "none";

    alert("Thanks for visiting! 👋");
}


window.addEventListener("click", function(event) {

    const popup = document.getElementById("popup");

    if (event.target === popup) {

        popup.style.display = "none";

        alert("Thanks for visiting! 👋");
    }

});

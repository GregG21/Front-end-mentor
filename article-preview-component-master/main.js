let shareButton = document.getElementById("share-button");
let shareContainer = document.getElementById("share-container");

shareButton.addEventListener("click", openShareMenu);

function openShareMenu() {
    if (shareContainer.classList.contains("active")) {
        shareContainer.classList.remove("active")
        shareButton.classList.remove("clicked")
    }
    else {
        shareContainer.classList.add("active")
        shareButton.classList.add("clicked")
    }
}
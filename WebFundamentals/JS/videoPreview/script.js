console.log("page loaded...");

var preview = document.querySelector(".preview");

function startPreview() {
    preview.muted = true;
    preview.play();
}

function stopPreview() {
    preview.muted = false;
    preview.pause();
}

// function startPreview(element) {
//     video.play();
// }
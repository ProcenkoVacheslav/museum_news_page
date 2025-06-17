function openImage(exhibitNumber) {
    modal = document.querySelectorAll('.modal')[exhibitNumber - 1];
    var image = document.querySelectorAll('.photo')[exhibitNumber - 1];
    var modalImage = document.querySelectorAll('.modal-content')[exhibitNumber - 1];

    modal.style.display = "block";
    modalImage.src = image.src;
}

function closeImage(exhibitNumber) {
    modal = document.querySelectorAll('.modal')[exhibitNumber - 1];
    modal.style.display = "none";
}
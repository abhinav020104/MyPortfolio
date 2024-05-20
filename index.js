document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function enlargeImage(img) {
    var enlargedImageSrc = img.src;
    document.getElementById("enlarged-image").src = enlargedImageSrc;
    document.getElementById("enlarged-image-overlay").style.display = "block";
}

function closeImage() {
    document.getElementById("enlarged-image-overlay").style.display = "none";
}
function openModal(imageSrc) {
    var modal = document.createElement('div');
    modal.classList.add('modal');

    var img = document.createElement('img');
    img.src = imageSrc;

    modal.appendChild(img);
    document.body.appendChild(modal);

    setTimeout(function () {
        modal.classList.add('active');
    }, 50);
}

document.addEventListener('click', function (event) {
    if (event.target.classList.contains('modal')) {
        event.target.classList.remove('active');
        setTimeout(function () {
            event.target.remove();
        }, 200); 
    }
});
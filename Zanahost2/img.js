
        const images = [
    'url("IMG-20240731-WA0001.jpg")',
    'url("IMG-20240731-WA0002.jpg")',
    'url("IMG-20240731-WA0003.jpg")',
    'url("IMG-20240731-WA0004.jpg")',
    'url("IMG-20240731-WA0005.jpg")'

];

let currentIndex = 0;

function changeBackgroundImage() {
    document.body.style.backgroundImage = images[currentIndex];
    currentIndex = (currentIndex + 1) % images.length;
}

setInterval(changeBackgroundImage, 4000); // Change image every 4 seconds

// Initialize with the first image
changeBackgroundImage();


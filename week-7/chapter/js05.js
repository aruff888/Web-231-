"use strict";
/* JavaScript 7th Edition
   Chapter 5
   Chapter Case

   Application to generate a slide show
   Author: Amanda Ruff
   Date: 09/22/25

   Filename: js05.js
*/

// Wait until the page loads
window.addEventListener("load", createLightbox);
window.addEventListener("load", setupGallery);

/* ------------------ LIGHTBOX CREATION ------------------ */
function createLightbox() {
    const lightbox = document.getElementById("lightbox");

    // Parts of the lightbox
    const lbTitle = document.createElement("h1");
    const lbCounter = document.createElement("div");
    const lbPrev = document.createElement("div");
    const lbNext = document.createElement("div");
    const lbPlay = document.createElement("div");
    const lbImages = document.createElement("div");

    // Set IDs
    lbTitle.id = "lbTitle";
    lbTitle.textContent = lightboxTitle; // Set title text

    lbCounter.id = "lbCounter";
    lbCounter.textContent = "1 / " + imgFiles.length; // Initialize slide counter

    lbPrev.id = "lbPrev";
    lbNext.id = "lbNext";
    lbPlay.id = "lbPlay";
    lbImages.id = "lbImages";

    // Append elements to lightbox
    lightbox.appendChild(lbTitle);
    lightbox.appendChild(lbCounter);
    lightbox.appendChild(lbPrev);
    lightbox.appendChild(lbNext);
    lightbox.appendChild(lbPlay);
    lightbox.appendChild(lbImages);

    // Add images to the lightbox container
    for (let i = 0; i < imgFiles.length; i++) {
        const image = document.createElement("img");
        image.src = imgFiles[i];
        image.alt = imgCaptions[i];
        lbImages.appendChild(image);
    }
}

/* ------------------ GALLERY SETUP ------------------ */
function setupGallery() {
    const galleryBox = document.getElementById("gallery");
    const imageCount = imgFiles.length;
    let currentSlide = 1;
    let runShow = true;
    let showRunning;

    // Gallery title
    const galleryTitle = document.createElement("h1");
    galleryTitle.id = "galleryTitle";
    galleryTitle.textContent = slidesTitle;
    galleryBox.appendChild(galleryTitle);

    // Slide counter
    const slideCounter = document.createElement("div");
    slideCounter.id = "slideCounter";
    slideCounter.textContent = `${currentSlide} / ${imageCount}`;
    galleryBox.appendChild(slideCounter);

    // Left button
    const leftBox = document.createElement("div");
    leftBox.id = "leftBox";
    leftBox.innerHTML = "&#9664;";
    leftBox.onclick = moveToLeft;
    galleryBox.appendChild(leftBox);

    // Right button
    const rightBox = document.createElement("div");
    rightBox.id = "rightBox";
    rightBox.innerHTML = "&#9654;";
    rightBox.onclick = moveToRight;
    galleryBox.appendChild(rightBox);

    // Play/Pause button
    const playPause = document.createElement("div");
    playPause.id = "playPause";
    playPause.innerHTML = "&#9199;";
    playPause.onclick = startStopShow;
    galleryBox.appendChild(playPause);

    // Slide container
    const slideBox = document.createElement("div");
    slideBox.id = "slideBox";
    galleryBox.appendChild(slideBox);

    // Add gallery images
    for (let i = 0; i < imageCount; i++) {
        const image = document.createElement("img");
        image.src = imgFiles[i];
        image.alt = imgCaptions[i];
        image.onclick = createModal;
        slideBox.appendChild(image);
    }

    /* ------------------ NAVIGATION FUNCTIONS ------------------ */
    function moveToRight() {
        const firstImage = slideBox.firstElementChild.cloneNode(true);
        firstImage.onclick = createModal;
        slideBox.appendChild(firstImage);
        slideBox.removeChild(slideBox.firstElementChild);
        currentSlide = (currentSlide % imageCount) + 1;
        slideCounter.textContent = `${currentSlide} / ${imageCount}`;
    }

    function moveToLeft() {
        const lastImage = slideBox.lastElementChild.cloneNode(true);
        lastImage.onclick = createModal;
        slideBox.removeChild(slideBox.lastElementChild);
        slideBox.insertBefore(lastImage, slideBox.firstElementChild);
        currentSlide = (currentSlide - 2 + imageCount) % imageCount + 1;
        slideCounter.textContent = `${currentSlide} / ${imageCount}`;
    }

    function startStopShow() {
        if (runShow) {
            showRunning = setInterval(moveToRight, 2000);
            runShow = false;
        } else {
            clearInterval(showRunning);
            runShow = true;
        }
    }

    /* ------------------ MODAL FUNCTION ------------------ */
    function createModal() {
        const modalWindow = document.createElement("div");
        modalWindow.id = "activeModal";

        const figureBox = document.createElement("figure");
        modalWindow.appendChild(figureBox);

        const modalImage = this.cloneNode(true);
        figureBox.appendChild(modalImage);

        const figureCaption = document.createElement("figcaption");
        figureCaption.textContent = modalImage.alt;
        figureBox.appendChild(figureCaption);

        const closeBox = document.createElement("div");
        closeBox.id = "modalClose";
        closeBox.innerHTML = "&times;";
        closeBox.onclick = () => document.body.removeChild(modalWindow);
        modalWindow.appendChild(closeBox);

        document.body.appendChild(modalWindow);
    }
}

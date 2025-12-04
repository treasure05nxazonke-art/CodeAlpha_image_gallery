document.addEventListener("DOMContentLoaded", () => {

    const galleryImages = document.querySelectorAll(".gallery img");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const closeBtn = document.querySelector(".close");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");
    const filterButtons = document.querySelectorAll(".filter-buttons button");

    let currentIndex = 0;

    // Open lightbox
    galleryImages.forEach((img, index) => {
        img.addEventListener("click", () => {
            currentIndex = index;
            showImage("fade");
            lightbox.style.display = "flex";
        });
    });

    // Show image with animation
    function showImage(direction = "fade") {
        lightboxImg.className = "";

        setTimeout(() => {
            lightboxImg.src = galleryImages[currentIndex].src;

            if (direction === "next") {
                lightboxImg.classList.add("slide-next");
            } else if (direction === "prev") {
                lightboxImg.classList.add("slide-prev");
            } else {
                lightboxImg.classList.add("fade-slide");
            }
        }, 20);
    }

    // Navigation
    nextBtn.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % galleryImages.length;
        showImage("next");
    });

    prevBtn.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
        showImage("prev");
    });

    closeBtn.addEventListener("click", () => {
        lightbox.style.display = "none";
    });

    // Filtering
    filterButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
            const category = btn.getAttribute("data-filter");

            galleryImages.forEach((img) => {
                if (category === "all" || img.dataset.category === category) {
                    img.style.display = "block";
                } else {
                    img.style.display = "none";
                }
            });
        });
    });

});

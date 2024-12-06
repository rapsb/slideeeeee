let currentSection = 0;
const sections = document.querySelectorAll('.section');

function updateSections() {
    sections.forEach((section, index) => {
        if (index < currentSection) {
            section.style.transform = 'translateX(-100%)'; // Slide keluar ke kiri
        } else if (index === currentSection) {
            section.style.transform = 'translateX(0)'; //Tetap ditempat ga pindah
        } else {
            section.style.transform = 'translateX(100%)'; //Slide masuk ke kanan
        }
    });
}

function nextPage() {
    if (currentSection < sections.length - 1) {
        currentSection++;
        updateSections();
    }
}

function prevPage() {
    if (currentSection > 0) {
        currentSection--;
        updateSections();
    }
}

// Initialize the sections on load
updateSections();
const slides = [ 
    {
        src: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1000&h=1000&fit=crop',
        alt: 'image1',
    },
    {
        src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1000&h=1000&fit=crop",
        alt: 'image2',
    },
    {
        src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1000&h=1000&fit=crop',
        alt: 'image3',
    },
    {
        src: 'https://w0.peakpx.com/wallpaper/820/953/HD-wallpaper-spring-meadow-wild-flowers-grass-dandelions-butterflies-spring-trees-sky-valley-daisies-flowers-field-meadow.jpg',
        alt: 'image4',
    },
];

let currentSlideIndex = 0;

// встановити в якості початкового зображення зі slides[0]
const slideImg = document.querySelector('img');
updateSlideImage(currentSlideIndex);

const [prevBtn, nextBtn] = document.querySelectorAll('.navBtn');

nextBtn.addEventListener('click', nextSlideHendler);

function nextSlideHendler() {
    //currentSlideIndex < slides.length - 1 ? currentSlideIndex ++ : 0;
    // if(currentSlideIndex < slides.length - 1) {
    //     currentSlideIndex ++;
    // } else {
    //     currentSlideIndex = 0;
    // };
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    updateSlideImage(currentSlideIndex);
};

prevBtn.addEventListener('click', prevSlideHandler);

function prevSlideHandler() {
    currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
    updateSlideImage(currentSlideIndex);
};

function updateSlideImage(currentSlideIndex) {
    slideImg.src = slides[currentSlideIndex].src;
    slideImg.alt = slides[currentSlideIndex].alt;
}
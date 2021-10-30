let carousel = document.querySelector('.carousel');
let sliders = [];

let slideIndex = 0;

const createSlide = () => {
    if (slideIndex >= movies.length) {
        slideIndex = 0;
    }

    // create variable sebagai penampung elemen
    let slide = document.createElement('div');
    let imgElement = document.createElement('img');
    let content = document.createElement('div');
    let h1 = document.createElement('h1');
    let p = document.createElement('p');

    // attach elemen
    
    h1.appendChild(document.createTextNode(movies[slideIndex].name));
    p.appendChild(document.createTextNode(movies[slideIndex].des));
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(content);
    slide.appendChild(imgElement);
    carousel.appendChild(slide);

    // setting image
    imgElement.src = movies[slideIndex].image;
    slideIndex++;

    // setting elemen
    slide.className = 'slider';
    content.className = 'slide-content';
    h1.className = 'movie-title';
    p.className = 'movie-des';

    sliders.push(slide);

    // slide efect

    if (sliders.length) {
        sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${30 * (sliders.length - 2)}px)`;
    }
}

for (let i = 0; i < 3; i++) {
    createSlide();
}

setInterval (() => {
    createSlide();
}, 5000); 


const createlist = (container, arr, i) => {
    let card = document.createElement('div');
    let card_img = document.createElement('img');
    let card_body = document.createElement('div');
    let h2 = document.createElement('h2');
    let a = document.createElement('a');
    let h6 = document.createElement('h6');
    let rate_btn = document.createElement('button');

    rate_btn.appendChild(document.createTextNode(arr[i].rate))
    a.appendChild(document.createTextNode(arr[i].name));
    a.setAttribute('href',arr[i].link);
    h2.appendChild(a);
    h6.appendChild(document.createTextNode(arr[i].des));
    card_body.appendChild(rate_btn)
    card_body.appendChild(h2);
    card_body.appendChild(h6);
    card.appendChild(card_img);
    card.appendChild(card_body);
    container.appendChild(card);

    card.className = 'card';
    card_img.className = 'card-img';
    card_body.className = 'card-body';
    h2.className = 'name';
    h6.className = 'des';
    rate_btn.className = 'rate-btn';

    card_img.src = arr[i].image;
}


let card_container2 = document.querySelector('.card-container-2');
let card_container3 = document.querySelector('.card-container-3');
let card_container4 = document.querySelector('.card-container-4');

for (let i = 0; i < movie.length; i++) {
    createlist(card_container2, movie, i);
}
for (let i = 0; i < series.length; i++) {
    createlist(card_container3, series, i);
}
for (let i = 0; i < anime.length; i++) {
    createlist(card_container4, anime, i);
}

// slider card


let cardContainer2 = document.querySelectorAll('.card-container-2');
let prevBtn2 = document.querySelectorAll('.prev2');
let nextBtn2 = document.querySelectorAll('.next2');

cardContainer2.forEach((item, i) => {
    let containerWidth = item.getBoundingClientRect().width;

    nextBtn2[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth - 200;
    })

    prevBtn2[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth + 200;
    })
})

let cardContainer3 = document.querySelectorAll('.card-container-3');
let prevBtn3 = document.querySelectorAll('.prev3');
let nextBtn3 = document.querySelectorAll('.next3');

cardContainer3.forEach((item, i) => {
    let containerWidth = item.getBoundingClientRect().width;

    nextBtn3[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth - 200;
    })

    prevBtn3[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth + 200;
    })
})

let cardContainer4 = document.querySelectorAll('.card-container-4');
let prevBtn4 = document.querySelectorAll('.prev4');
let nextBtn4 = document.querySelectorAll('.next4');

cardContainer4.forEach((item, i) => {
    let containerWidth = item.getBoundingClientRect().width;

    nextBtn4[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth - 200;
    })

    prevBtn4[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth + 200;
    })
})
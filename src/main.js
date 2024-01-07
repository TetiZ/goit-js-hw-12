'use strict';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import axios from 'axios';

const form = document.querySelector('.search-form');
const input = document.querySelector('.search-input');

const gallery = document.querySelector('.gallery');

// spinner

const loader = document.querySelector('.loader');
const showLoader = () => loader.classList.add('active');
const hideLoader = () => loader.classList.remove('active');

// пагінація
const loadBtn = document.querySelector('.load-more-btn');

let page = 1;
let perPage = 40;

// Pixabay
// HTTP - запити;
// event listener

const searchImg = () => {
  const inputText = input.value;

  const params = new URLSearchParams({
    key: '41640115-31701c1b62cbb4a16b6499d34',
    q: `${inputText}`,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  const url = `https://pixabay.com/api/?${params}`;

  showLoader();

  axios
    .get(url)
    .then(({ hits }) => {
      hideLoader();

      if (hits.length === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
      } else {
        gallery.innerHTML = hits
          .map(
            hit => `
              
              <li class="gallery-item">
                <a class="gallery-link" href=${hit.largeImageURL}>
                    <img
                      class="gallery-image"
                      src=${hit.webformatURL}
                      alt=${hit.tags}
                    />
                  
                  <div class="img-info-wrapper">
                    <div class="img-part-info-wrapper">
                    <h3 class="img-info-title">Likes</h3>
                      <p class="img-info">${hit.likes}</p>
                    </div>
  
                    <div class="img-part-info-wrapper">
                    <h3 class="img-info-title">Views</h3>
                      <p class="img-info">${hit.views}</p>
                    </div>
  
                    <div class="img-part-info-wrapper">
                    <h3 class="img-info-title">Comments</h3>
                      <p class="img-info">${hit.comments}</p>
                    </div>
  
                    <div class="img-part-info-wrapper">
                    <h3 class="img-info-title">Downloads</h3>
                      <p class="img-info">${hit.downloads}</p>
                    </div>
                  </div>
              </a>
            </li>
            `
          )
          .join('');
      }

      let lightbox = new SimpleLightbox('.gallery a', {
        captionDelay: 250,
        captionType: 'attr',
        captionsData: 'alt',
      });
      lightbox.refresh();
    })
    .catch(error => {
      console.log(error);
      hideLoader();
    });
};

const submitHandler = e => {
  e.preventDefault();
  gallery.innerHTML = '';
  searchImg();
  form.reset();
};

form.addEventListener('submit', submitHandler);

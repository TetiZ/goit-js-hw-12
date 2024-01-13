'use strict';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import axios from 'axios';

const form = document.querySelector('.search-form');
const input = document.querySelector('.search-input');

const gallery = document.querySelector('.gallery');

const API_KEY = '41640115-31701c1b62cbb4a16b6499d34';
const API_URL = 'https://pixabay.com/api/';

// spinner

const loader = document.querySelector('.loader');
const showLoader = () => loader.classList.add('active');
const hideLoader = () => loader.classList.remove('active');

// пагінація

let page = 1;
let perPage = 40;
let totalPages;

const loadBtn = document.querySelector('.load-more-btn');
loadBtn.classList.add('inactive');

const fetchImg = async () => {
  if (page >= totalPages) {
    loadBtn.classList.add('inactive');
    iziToast.error({
      message: "We're sorry, but you've reached the end of search results.",
      position: 'topRight',
    });
  }

  try {
    showLoader();
    await searchImg();
    page += 1;
  } catch (error) {
    console.log(error);
  }
};

loadBtn.addEventListener('click', fetchImg);

// Pixabay
// HTTP - запити;

// User request field

form.addEventListener('input', e => {
  e.preventDefault();

  try {
    localStorage.setItem('userInput', e.target.value);
  } catch (error) {
    console.error('LocalStorage error:', error.message);
  }
});

// event listener

const searchImg = async () => {
  const inputText = localStorage.getItem('userInput') || '';

  const params = new URLSearchParams({
    key: API_KEY,
    q: `${inputText}`,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: page,
    per_page: perPage,
  });

  const url = `${API_URL}?${params}`;

  showLoader();

  try {
    const response = await axios.get(url);
    const { hits } = response.data;
    totalPages = Math.ceil(response.data.totalHits / perPage);
    hideLoader();

    if (hits.length === 0) {
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
    } else {
      renderImg(hits);
    }

    let lightbox = new SimpleLightbox('.gallery a', {
      captionDelay: 250,
      captionType: 'attr',
      captionsData: 'alt',
    });
    lightbox.refresh();
  } catch (error) {
    console.log(error);
    hideLoader();
  }
};

const renderImg = hits => {
  const markup = hits
    .map(
      hit => `
              <li class="gallery-item">
                <a class="gallery-link" href=${hit.largeImageURL}>
                    <img
                      class="gallery-image"
                      src=${hit.webformatURL}
                      alt="${hit.tags}"
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
  gallery.insertAdjacentHTML('beforeend', markup);
};

const submitHandler = async e => {
  e.preventDefault();
  gallery.innerHTML = '';
  page = 1;
  loadBtn.classList.remove('inactive');

  try {
    searchImg();
  } catch (error) {
    console.log(error);
  }

  form.reset();
};

form.addEventListener('submit', submitHandler);

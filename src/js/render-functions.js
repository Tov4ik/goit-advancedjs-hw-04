export function renderImages(images) {
  return images
    .map(
      ({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => `
      <li class="gallery-item">
        <a class="gallery-link" href="${largeImageURL}">
          <img
            class="gallery-image"
            src="${webformatURL}"
            alt="${tags}"
            loading="lazy"
          />
          <ul class="gallery-info">
            <li class="gallery-info-item">
              <p class="gallery-info-label">Likes</p>
              <p class="gallery-info-value">${likes}</p>
            </li>
            <li class="gallery-info-item">
              <p class="gallery-info-label">Views</p>
              <p class="gallery-info-value">${views}</p>
            </li>
            <li class="gallery-info-item">
              <p class="gallery-info-label">Comments</p>
              <p class="gallery-info-value">${comments}</p>
            </li>
            <li class="gallery-info-item">
              <p class="gallery-info-label">Downloads</p>
              <p class="gallery-info-value">${downloads}</p>
            </li>
          </ul>
        </a>
      </li>`
    )
    .join('');
}

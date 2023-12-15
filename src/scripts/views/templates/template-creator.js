const createDetailWisataTemplate = (wisata) => `
      <div class="container-fluid">
        <div class="row g-3">
          <div class="col-lg-8">
            <img class="detail-image rounded-4" src="${wisata.data.image_path}" alt="${wisata.data.name}" />
          </div>
          <div class="col-lg-4">
            <h2 class="fw-bold">${wisata.data.name}</h2>
            <p class="card-text"><i class="bi bi-star-fill text-warning"></i> ${wisata.data.rating}</p>
            <p class="card-text"><i class="bi bi-geo-alt-fill"></i> ${wisata.data.address}</p>
          </div>
        </div>
        <div class="my-4">
          <h4>Deskripsi</h4>
          <p>${wisata.data.description}</p>
          <h4>Location</h4>
          <p><i class="bi bi-geo-alt-fill"></i> ${wisata.data.address}, ${wisata.data.regency}, ${wisata.data.province}</p>
          ${wisata.data.location}
        </div>
      </div>
    `;
const createItemWisataTemplate = (wisata) => `
        <div class="col-md-4">
          <a href="/#/wisata/${wisata._id}" class="nav-link">
            <div class="card text-bg-dark border-0">
              <img src="${wisata.image_path}" class="card-img" alt="${wisata.name}" style="height: 18rem; object-fit: cover;">
              <div class="card-img-overlay">
                <h5 class="card-title">${wisata.name}</h5>
                <p class="card-text"><i class="bi bi-star-fill text-warning"></i> ${wisata.rating}</p>
                <p class="card-text"><i class="bi bi-geo-alt-fill"></i> ${wisata.address}</p>
              </div>
            </div>
          </a>
        </div>
        `;

const createLikeButtonTemplate = () => `
  <button aria-label="like this wisata" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this wisata" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createItemWisataTemplate,
  createDetailWisataTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};

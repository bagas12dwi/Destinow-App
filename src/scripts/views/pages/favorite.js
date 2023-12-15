import FavoriteWisataIdb from '../../data/favorite-wisata-idb';
import { createItemWisataTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading" id="content__heading">Tempat Wisata Favorite</h2>
        <br>
        <div class="row g-3 justify-content-center" id="wisata-item"></div>
      </div>
    `;
  },

  async afterRender() {
    const tour = await FavoriteWisataIdb.getAllWisata();
    const tourContainer = document.querySelector('#wisata-item');

    tour.forEach((data) => {
      tourContainer.innerHTML += createItemWisataTemplate(data);
    });
  },
};

export default Favorite;

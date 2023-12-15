import UrlParser from '../../routes/url-parser';
import WisataSource from '../../data/wisata-source';
import { createDetailWisataTemplate } from '../templates/template-creator';
import LikeButtonPresenter from '../../utils/like-button-initiators';
import FavoriteWisataIdb from '../../data/favorite-wisata-idb';

const DetailWisata = {
  async render() {
    return `
    <div id="wisata" class="wisata"></div>
    <div id="likeButtonContainer"></div>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const data = await WisataSource.detailWisata(url.id);
    const boxWisata = document.querySelector('#wisata');
    boxWisata.innerHTML = createDetailWisataTemplate(data);

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteWisata: FavoriteWisataIdb,
      data: {
        id: data.data._id,
        name: data.data.name,
        address: data.data.address,
        province: data.data.province,
        price: data.data.price,
        opening_hours: data.data.opening_hours,
        lat: data.data.lat,
        long: data.data.long,
        image_path: data.data.image_path,
        description: data.data.description,
        rating: data.data.rating,
        created_at: data.data.created_at,
        __v: data.data.__v,
      },
    });
  },
};

export default DetailWisata;

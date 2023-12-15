import FavoriteWisataIdb from '../data/favorite-wisata-idb';
import { createLikeButtonTemplate, createLikedButtonTemplate } from '../views/templates/template-creator';

const LikeButtonPresenter = {
  async init({ likeButtonContainer, favoriteWisata, data }) {
    this._likeButtonContainer = likeButtonContainer;
    this._wisata = data;
    this.favoriteWisata = favoriteWisata;

    await this._renderButton();
  },
  async _renderButton() {
    const { id } = this._wisata;

    if (await this._isWisataExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isWisataExist(id) {
    try {
      if (!id) {
        console.error('Invalid wisata id');
        return false;
      }

      const wisata = await FavoriteWisataIdb.getWisata(id);

      // Penanganan jika restaurant tidak ditemukan
      if (!wisata) {
        console.log(`Wisata with id ${id} not found`);
        return false;
      }

      return true;
    } catch (error) {
      console.error('Error in _isWisataExist:', error);
      return false;
    }
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML = createLikeButtonTemplate();

    const likeButton = document.querySelector('.like');

    // Pastikan elemen dengan kelas .likeButton ditemukan sebelum menetapkan event listener
    if (likeButton) {
      likeButton.addEventListener('click', async () => {
        await FavoriteWisataIdb.putWisata(this._wisata);
        this._renderButton();
      });
    } else {
      console.error('Element with class .like not found');
    }
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = createLikedButtonTemplate();

    const likeButton = document.querySelector('.like');
    likeButton.addEventListener('click', async () => {
      await FavoriteWisataIdb.deleteWisata(this._wisata.id);
      this._renderButton();
    });
  },
};

export default LikeButtonPresenter;

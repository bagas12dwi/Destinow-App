import CONFIG from './config';

const API_ENDPOINT = {
  DAFTAR_WISATA: `${CONFIG.BASE_URL}/tour`,
  DETAIL_WISATA: (id) => `${CONFIG.BASE_URL}/tour/${id}`,
};

export default API_ENDPOINT;

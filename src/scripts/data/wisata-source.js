import API_ENDPOINT from '../globals/end-point';

class WisataSource {
  static async daftarWisata() {
    try {
      const response = await fetch(API_ENDPOINT.DAFTAR_WISATA);
      const responseJson = await response.json();

      console.log('API Response (daftarWisata):', responseJson); // Tambahkan logging

      if (responseJson.error) {
        console.error('Error from API (daftarWisata):', responseJson.message);
        return [];
      }

      return responseJson.data || [];
    } catch (error) {
      console.error('Error fetching data (daftarWisata):', error.message);
      return [];
    }
  }

  static async detailWisata(id) {
    const response = await fetch(API_ENDPOINT.DETAIL_WISATA(id));
    return response.json();
  }
}

export default WisataSource;

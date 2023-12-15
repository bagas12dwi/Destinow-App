import { createItemWisataTemplate } from '../templates/template-creator';
import WisataSource from '../../data/wisata-source';

const Home = {
  async render() {
    return `
    <section>
      <div class="container-fluid mb-3">
        <div class="row align-items-center g-3">
          <div class="col-lg-7">
            <h1 class="hero-title fw-bold">
              DestiNow ...
            </h1>
            <p class="hero-tagline fs-5">
              <br>Liburan membuat anda melupakan
              permasalahan dan berfokus pada 
              keindahan kehidupan.
            </p>
            <a href="#wisata" class="hero-button btn btn-dark rounded-pill px-5">
              Explore
            </a>
          </div>
          <div class="col-lg-5">
            <img src="hero-1.jpg" alt="Hero Image" class="hero-image rounded-pill" >
          </div>
        </div>
      </div>
    </section>
    
    <section id="wisata">
      <h3 class="fw-bold text-center my-4">List Tempat Wisata</h3>
      <div class="row g-3 justify-content-center" id="list">
      </div>
    </section>
    `;
  },

  async afterRender() {
    try {
      const tour = await WisataSource.daftarWisata();

      if (Array.isArray(tour)) {
        const boxWisata = document.querySelector('#list');
        tour.forEach((wisata) => {
          boxWisata.innerHTML += createItemWisataTemplate(wisata);
        });
      } else {
        console.error('Data wisata tidak valid:', tour);
      }
    } catch (error) {
      console.error('Error fetching wisata data:', error);
    }
  },
};

export default Home;

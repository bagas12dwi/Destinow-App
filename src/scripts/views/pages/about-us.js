const AboutUs = {
  async render() {
    return `
            <section id="about" class="mb-3">
              <div class="row g-3 d-flex align-items-center">
                <div class="col-lg-6">
                  <h2 class="fw-bold">About Us</h2>
                  <p>
                    DestiNow merupakan perusahaan IT consultant yang
                    menyajikan informasi destinasi pariwisata dan harga
                    secara lengkap. Kami berusaha memberikan akses 
                    mudah dan memberikan informasi yang jelas bagi para 
                    wisatawan yang mencari informasi untuk perencanaan 
                    perjalanan.
                  </p>
                </div>
                <div class="col-lg-6 d-flex justify-content-end">
                  <img src="about.png" class="img-fluid about-image" alt="logo">
                </div>
              </div>
            </section>

            <section id="tim" class="mb-3">
              <h2 class="fw-bold">Tim</h2>
              <p>
                Tim kami terdiri dari para expert  teknologi informasi yang 
                terlatih dan paham  dibidangnya. Terdiri dari empat orang  di
                bidang Front-End Back-End dan satu orang di bidang Fullstack
              </p>
              <div class="row g-3 justify-content-center">
                <div class="col-lg-4 col-md-4 col-sm-2 d-flex justify-content-center">
                  <div class="card" style="width: 18rem;">
                    <img src="/images/bagas.jpg" class="tim-image card-img-top" alt="tim image">
                    <div class="card-body text-center">
                      <h6 class="fw-bold">Bagas Dwi Sulistyo</h6>
                      <p>Front-End Back-End</p>
                      <p class="card-text fst-italic">“Berani bermimpi,
                      gigih meraihnya” </p>
                      <div class="text-start">
                        <a href="https://www.instagram.com/bagas12dwi_" class="nav-link">
                          <i class="bi bi-instagram"></i> bagas12dwi_
                        </a>
                        <a href="https://www.linkedin.com/in/bagas12dwi/" class="nav-link">
                          <i class="bi bi-linkedin"></i> bagas12dwi
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-2 d-flex justify-content-center">
                  <div class="card" style="width: 18rem;">
                    <img src="/images/arvin.jpg" class="tim-image card-img-top" alt="tim image">
                    <div class="card-body text-center">
                      <h6 class="fw-bold">Arvin Muhammad Ajif</h6>
                      <p>Front-End Back-End</p>
                      <p class="card-text fst-italic">“Jadilah versi terbaik
                      dari dirimu”</p>
                      <div class="text-start">
                        <a href="https://www.instagram.com/arvinajif1605_" class="nav-link">
                          <i class="bi bi-instagram"></i> arvinajif1605_
                        </a>
                        <a href="https://www.linkedin.com/in/arvin-muhammad-ajif-8277b129a/" class="nav-link">
                          <i class="bi bi-linkedin"></i> Arvin Muhammad Ajif
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-2 d-flex justify-content-center">
                  <div class="card" style="width: 18rem;">
                    <img src="/images/jana.webp" class="tim-image card-img-top" alt="tim image">
                    <div class="card-body text-center">
                      <h6 class="fw-bold">Jana Fitria Malawat</h6>
                      <p>Front-End Back-End</p>
                      <p class="card-text fst-italic">“Impian besar berawal
                      dari hal kecil yang gigih”</p>
                      <div class="text-start">
                        <a href="https://www.instagram.com/jfmlwt" class="nav-link">
                          <i class="bi bi-instagram"></i> jfmlwt
                        </a>
                        <a href="https://www.linkedin.com/in/jana-fitria-malawat-89803b224/" class="nav-link">
                          <i class="bi bi-linkedin"></i> Jana Fitria Malawat
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-2 d-flex justify-content-center">
                  <div class="card" style="width: 18rem;">
                    <img src="/images/didah.jpg" class="tim-image card-img-top" alt="tim image">
                    <div class="card-body text-center">
                      <h6 class="fw-bold">Didah Rosyidah</h6>
                      <p>Front-End Back-End</p>
                      <p class="card-text fst-italic">“Hari ini harus lebih 
                      baik lagi daripada
                      hari sebelumnya” </p>
                      <div class="text-start">
                        <a href="https://www.instagram.com/co0kiesvj_" class="nav-link">
                          <i class="bi bi-instagram"></i> co0kiesvj_
                        </a>
                        <a href="https://www.linkedin.com/in/didah-rosyidah-361aa1244/" class="nav-link">
                          <i class="bi bi-linkedin"></i> Didah Rosyidah
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-2 d-flex justify-content-center">
                  <div class="card" style="width: 18rem;">
                    <img src="/images/berli.jpg" class="tim-image card-img-top" alt="tim image">
                    <div class="card-body text-center">
                      <h6 class="fw-bold">Berliana</h6>
                      <p>Fullstack</p>
                      <p class="card-text fst-italic">“Terus belajar tanpa 
                      takut gagal” </p>
                      <div class="text-start">
                        <a href="https://www.instagram.com/berliana" class="nav-link">
                          <i class="bi bi-instagram"></i> berliana
                        </a>
                        <a href="https://www.linkedin.com/in/berliana/" class="nav-link">
                          <i class="bi bi-linkedin"></i> berliana
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default AboutUs;

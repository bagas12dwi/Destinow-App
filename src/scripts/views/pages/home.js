const Home = {
  async render() {
    return `
    <div class="hero" >
        <div class="hero__content">
            <h1 class="hero__title">Desti Now ...</h1>
            <p class="hero__tagline">
                <br>Liburan membuat anda melupakan
                permasalahan dan berfokus pada 
                keindahan kehidupan..
            </p>
        </div>
        <img src="/images/hero.png" alt="Hero Image" class="hero__image">
    </div>
       
    <main>
      <div id="mainContent">
      <div class="list" id="list"></div>
    </div>
    </main>
    `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default Home;

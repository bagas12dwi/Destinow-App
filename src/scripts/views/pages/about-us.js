/* eslint-disable no-unused-vars */

const AboutUs = {
  async render() {
    return `
      <div class="content">
      ${createSearchBarTemplate()}
        <div id="restaurants" class="restaurants">
        Haii Jugaaa
        </div>
      </div>
    `;
  },

  async afterRender() {
    
  },
};

export default AboutUs;

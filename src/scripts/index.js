import 'regenerator-runtime';
import '../styles/style.css';
import '../styles/responsive.css';
import App from './views/app';

// eslint-disable-next-line no-unused-vars
document.addEventListener('DOMContentLoaded', () => {
  const app = new App({
    button: document.querySelector('#menu'),
    drawer: document.querySelector('#bag_draw'),
    content: document.querySelector('#mainContent'), // Sesuaikan dengan ID elemen konten Anda
  });

  window.addEventListener('hashchange', () => {
    app.renderPage();
  });

  window.addEventListener('load', () => {
    app.renderPage();
  });
});

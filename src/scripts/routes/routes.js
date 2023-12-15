import Home from '../views/pages/home';
import Wisata from '../views/pages/wisata';
import Favorite from '../views/pages/favorite';
import AboutUs from '../views/pages/about-us';

const routes = {
  '/': Home, // default page
  '/home': Home,
  '/wisata/:id': Wisata,
  '/favorite': Favorite,
  '/about-us': AboutUs,
};

export default routes;

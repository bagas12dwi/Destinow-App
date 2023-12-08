import Home from '../views/pages/home';
import Wisata from '../views/pages/wisata';
import Favorite from '../views/pages/favorite';

const routes = {
  '/': Home, // default page
  '/home': Home,
  '/wisata/:id': Wisata,
  '/favorite': Favorite,
};

export default routes;

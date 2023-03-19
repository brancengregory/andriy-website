import { Router } from '@vaadin/router';
import { routes } from './routes';

const router = new Router();
router.setRoutes(routes);

export { router };
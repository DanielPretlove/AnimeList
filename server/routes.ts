import { home } from './handlers/home';
import { anime } from './handlers/anime';
import { requestLogger } from './middleware/requestLogger';
import { Route } from './types';

export const routes: Route[] = [
  {
    method: 'get',
    path: '/',
    middleware: [requestLogger],
    handler: home,
  },
  {
    method: 'get',
    path: '/anime',
    middleware: [requestLogger],
    handler: anime,
  },
];
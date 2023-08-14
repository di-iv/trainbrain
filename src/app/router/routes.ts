import { ResultsPage } from '@/pages/results';
import { TheGamePage } from '@/pages/the-game';
import { TrainPage } from '@/pages/train';
import { MainLayout } from '@/widgets/layout';
import { RouteNames } from '@/shared/config/route-names';
import { checkGameName } from './guards';

export const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: '',
        name: RouteNames.Train,
        component: TrainPage,
      },
      {
        path: 'results',
        name: RouteNames.Results,
        component: ResultsPage,
      },
      {
        path: 'games/:name',
        name: RouteNames.Game,
        component: TheGamePage,
        beforeEnter: [checkGameName],
      },
    ],
  },
];

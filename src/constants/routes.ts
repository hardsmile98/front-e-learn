type IIcon = 'home' | 'learn' | 'logout';

interface IRoutesMap {
  name: string;
  path: string;
  iconName: IIcon,
}

const routes:Array<IRoutesMap> = [
  {
    path: '/',
    name: 'Домой',
    iconName: 'home',
  },
  {
    path: '/learn',
    name: 'Обучение',
    iconName: 'learn',
  },
  {
    path: '/logout',
    name: 'Выход',
    iconName: 'logout',
  },
];

export default routes;

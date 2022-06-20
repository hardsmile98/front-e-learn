import {
  faUser, faSquareCaretRight, faPenToSquare,
} from '@fortawesome/free-regular-svg-icons';

export default [
  {
    path: '/',
    name: 'Домой',
    icon: faSquareCaretRight,
  },
  {
    path: '/profile',
    name: 'Профиль',
    icon: faUser,
  },
  {
    path: '/add',
    name: 'Добавить',
    icon: faPenToSquare,
  },
];

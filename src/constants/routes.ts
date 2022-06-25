import {
  faUser, faSquareCaretRight, faPenToSquare,
} from '@fortawesome/free-regular-svg-icons';

export default [
  {
    path: '/',
    name: 'Домой',
    icon: faSquareCaretRight,
    isNeedAuth: false,
  },
  {
    path: '/profile',
    name: 'Профиль',
    icon: faUser,
    isNeedAuth: true,
  },
  {
    path: '/add',
    name: 'Добавить',
    icon: faPenToSquare,
    isNeedAuth: true,
  },
];

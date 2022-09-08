export default [
  // Auth
  { path: '/api/v1/auth/login', method: 'post', data: 'good.json' },
  { path: '/api/v1/auth/register', method: 'post', data: 'good.json' },
  { path: '/api/v1/auth/logout', method: 'post', data: 'good.json' },

  // Profile
  { path: '/api/v1/profile/me', method: 'get', data: 'good.json' },
];

export default [
  // Auth
  { path: '/api/v1/auth/login', method: 'post', data: 'good.json' },
  { path: '/api/v1/auth/register', method: 'post', data: 'good.json' },
  { path: '/api/v1/auth/logout', method: 'post', data: 'good.json' },

  // Profile
  { path: '/api/v1/profile/me', method: 'get', data: 'good.json' },
  { path: '/api/v1/profile/info', method: 'get', data: 'profileInfo.json' },
  { path: '/api/v1/profile/accure', method: 'post', data: 'accure.json' },

  // Course
  { path: '/api/v1/course', method: 'get', data: 'course.json' },

  // Larn
  { path: '/api/v1/learn/finish', method: 'post', data: 'good.json' },
  { path: '/api/v1/learn/*', method: 'get', data: 'learn.json' },
];

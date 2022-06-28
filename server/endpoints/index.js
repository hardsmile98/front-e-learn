const endpoints = [
  { path: '/api/profile', data: 'profile.json' },
  { path: '/api/jobs', data: 'jobs.json' },
  { path: '/api/job/*', data: 'job.json' },
  { path: '/api/recommends', data: 'recommends.json' },
];

module.exports = endpoints;

/* ============
 * Routes File
 * ============
 *
 * The routes and redirects are defined in this file.
 */

export default [
  // Home
  {
    path: '/home',
    name: 'landing.index',
    component: () => import('@/views/Landing/Index.vue'),

    // If the user needs to be authenticated to view this page
    meta: {
      auth: true,
    },
  },
  {
    path: '/main',
    name: 'game.index',
    component: () => import('@/views/Game/Index.vue'),
  },
  {
    path: '/test',
    name: 'test.index',
    component: () => import('@/components/Card/Index.vue'),
  },
  {
    path: '/',
    redirect: '/home',
  },
];

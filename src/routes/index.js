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
  },
  {
    path: '/main',
    name: 'game.index',
    component: () => import('@/views/Game/Index.vue'),
  },
  {
    path: '/test',
    name: 'test.index',
    component: () => import('@/components/Test/Index.vue'),
  },
  {
    path: '/result',
    name: 'result.index',
    component: () => import('@/components/BattleResult/Index.vue'),
  },
  {
    path: '/',
    redirect: '/home',
  },
];

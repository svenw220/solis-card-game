<template>
  <div class="container landing">
    <Navbar />
    <p>This is Landing page</p>
  </div>
</template>

<script>
/* ============
 * Home Index Page
 * ============
 *
 * The home index page.
 */

import Navbar from '@/layouts/Navbar/Index.vue';

export default {
  /**
   * The name of the page.
   */
  name: 'Landing',

  /**
   * The components that the page can use.
   */
  components: {
    Navbar,
  },
};
</script>

<template>
  <section class="container is-fullhd landing">
    <Avatar />
  </section>
</template>

<script>
/* ============
 * Home Index Page
 * ============
 *
 * The home index page.
 */

import Avatar from '@/components/Avatar/Index.vue';

export default {
  /**
   * The name of the page.
   */
  name: 'Game',

  /**
   * The components that the page can use.
   */
  components: {
    Avatar,
  },
};
</script>

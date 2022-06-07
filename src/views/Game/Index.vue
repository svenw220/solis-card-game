<template>
  <section class="container is-fullhd landing">
    <Avatar playerWalletAddr="0x5478...26A031" />
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

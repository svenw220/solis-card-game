<template>
  <GamePage />
</template>

<script>
/* ============
 * Home Index Page
 * ============
 *
 * The home index page.
 */

import GamePage from '@/components/GamePage/Index.vue';

export default {
  /**
   * The name of the page.
   */
  name: 'Game',

  /**
   * The components that the page can use.
   */
  components: {
    GamePage,
  },
};
</script>

<style lang="scss" scoped></style>

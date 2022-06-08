<template>
  <div class="game-card">
    <div class="card-title">Card overview</div>
    <img src="@/assets/images/card_overview.svg" alt="Card overview" />
  </div>
</template>

<script>
/* ============
 * Home Index Page
 * ============
 *
 * The home index page.
 */

export default {
  /**
   * The name of the page.
   */
  name: 'Card',
  /**
   * The components that the page can use.
   */

  components: {},
  props: {},
};
</script>

<style lang="scss" scoped>
.game-card {
  margin-top: 100px;
  margin-bottom: 100px;
  .card-title {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 4px;
  }

  img {
    width: 100%;
  }
}
</style>

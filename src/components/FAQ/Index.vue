<template>
  <section class="faq">
    <div class="faq-title has-text-weight-semibold">
      <span class="yellow-square"></span>
      Frequently Asked Questions
      <span class="yellow-square"></span>
    </div>
  </section>
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
  name: 'NftCard',

  /**
   * The components that the page can use.
   */
  components: {},
};
</script>

<style lang="scss" scoped>
.faq {
  margin-top: 5rem;

  &-title {
    font-size: 2rem;
    text-align: center;
    margin-bottom: 2rem;

    .yellow-square {
      display: inline-block;
      border: 4px solid #f9da75;
      //height: 8px;
      //width: 8px;
      //line-height: 8px;
      //background-color: #f9da75;
      transform: rotateZ(45deg);
      margin: 0 1.5rem;
    }
  }
}
</style>

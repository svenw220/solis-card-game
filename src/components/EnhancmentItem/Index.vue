<template>
  <div class="enhancment-item">
    <div class="item-label">HP</div>
    <div class="item-content">
      <div class="minus-button">-</div>
      <div class="value">0</div>
      <div class="plus-button">+</div>
    </div>
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
  name: 'EnhancmentItem',
  /**
   * The components that the page can use.
   */

  components: {},
  props: {},
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.enhancment-item {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  .item-content {
    display: flex;
    flex-direction: row;
  }
}
</style>

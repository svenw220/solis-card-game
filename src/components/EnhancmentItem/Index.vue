<template>
  <div class="enhancment-item">
    <div class="item-label">HP</div>
    <div class="item-content">
      <div class="minus-button" @click="decreaseItem">-</div>
      <div class="value">{{ this.itemValue }}</div>
      <div class="plus-button" @click="increaseItem">+</div>
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
    return {
      itemValue: 0,
    };
  },
  methods: {
    increaseItem() {
      if (this.itemValue <= 99) {
        this.itemValue += 1;
      }
    },
    decreaseItem() {
      if (this.itemValue > 0) {
        this.itemValue -= 1;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.enhancment-item {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 12px 0;
  border-bottom: 4px solid #e6e5e8;
  .item-label {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }
  .item-content {
    display: flex;
    flex-direction: row;
    font-size: 1rem;
    .value {
      margin: 0 1rem;
    }

    .minus-button,
    .plus-button {
      font-weight: 700;
      color: #6c67d9;
      border: 1px solid rgba(116, 115, 125, 0.24);
      box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.08);
      border-radius: 32px;
      height: 30px;
      width: 30px;
      text-align: center;
      line-height: 30px;
      &:hover {
        cursor: pointer;
      }
    }
  }
}
</style>

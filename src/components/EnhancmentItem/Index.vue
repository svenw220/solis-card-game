<template>
  <div class="enhancment-item" :name="itemValue[0]">
    <div class="item-label">{{ itemValue[0] }}</div>
    <div class="item-content">
      <div class="minus-button" @click="decreaseItem">-</div>
      <div class="value">{{ itemValue[1] }}</div>
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
  props: {
    itemValue: {
      type: Array,
      default() {
        return [];
      },
    },
    givePower: {
      type: Function,
      default() {
        return {};
      },
    },
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {
    increaseItem() {
      if (this.itemValue[1] <= 99) {
        this.itemValue[1] += 1;
        this.givePower(this.itemValue[0], this.itemValue[1]);
      }
    },
    decreaseItem() {
      if (this.itemValue[1] > 0) {
        this.itemValue[1] -= 1;
        this.givePower(this.itemValue[0], this.itemValue[1]);
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
    text-transform: uppercase;
  }
  .item-content {
    display: flex;
    flex-direction: row;
    font-size: 1rem;
    justify-content: space-between;
    align-items: center;
    width: 100px;
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

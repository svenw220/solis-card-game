<template>
  <div :class="['property-item', { [itemType]: itemValue }]">
    <b-image
      class="item-image"
      :src="require('@/assets/images/' + itemType + '.svg')"
      alt="Property Item"
    />
    <p class="item-value">{{ itemValue }}</p>
  </div>
</template>

<script>
export default {
  name: 'Item',
  components: {},
  props: {
    itemType: {
      type: String,
      default: '',
    },
    itemValue: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.property-item {
  height: 30px;
  width: 30px;
  display: inline-flex;
  flex-direction: column;
  border-radius: 18px;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: white;
  position: relative;
  top: -22px;
  left: -8px;
  padding-top: 16px;
  &.hp {
    align-self: flex-end;
    background-color: transparent;
    top: -30px;
    left: 8px;

    .item-image {
      transform: scale(1.8);
    }

    .item-value {
      position: absolute;
      color: #fff;
    }
  }
  .item-value {
    font-weight: 700;
    font-size: 1rem;
    color: #191824;
  }
}
</style>

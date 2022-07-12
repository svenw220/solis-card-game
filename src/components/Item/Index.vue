<template>
  <div class="property-item is-flex is-flex-direction-column">
    <b-image
      class="item-image"
      :src="require('@/assets/images/' + this.itemType + '.svg')"
      alt="Property Item"
    />
    <p class="item-value">{{ this.itemValue }}</p>
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
  height: 36px;
  width: 36px;
  border-radius: 18px;
  align-items: center;
  justify-content: center;
  .item-image {
    height: 16px;
    width: 16px;
  }
  .item-value {
    font-weight: 700;
    font-size: 1rem;
    color: #191824;
  }
}
</style>

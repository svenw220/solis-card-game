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
  .item-image {
    height: 50px;
    width: 50px;
  }
  .item-value {
    font-weight: 400;
    font-size: 1rem;
    line-height: 15;
  }
}
</style>

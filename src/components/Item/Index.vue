<template>
  <div class="property-item">
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
  .item-value {
    font-weight: 700;
    font-size: 1rem;
    color: #191824;
  }
}
</style>

<template>
  <div class="property-item">
    <b-image
      :src="require(`@/assets/images/${itemType}.svg`)"
      alt="Property Item"
    />
    <p class="item-value">{{ itemValue }}</p>
  </div>
</template>

<script>
export default {
  name: 'Item',
  components: {},
  props: {},
  data() {
    return {
      itemType: {
        type: String,
        default: '',
      },
      itemValue: {
        type: Number,
        default: 0,
      },
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.property-item {
}
</style>

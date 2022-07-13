<template>
  <div class="total-rating">
    <b-image
      class="rating-star"
      :src="require('@/assets/images/star.svg')"
      alt="Turn State"
      rounded
    />
    <p>{{ this.tRating }}</p>
  </div>
</template>

<script>
export default {
  name: 'TotalRating',
  components: {},
  props: {
    tRating: {
      type: Number,
      default: 100,
    },
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.total-rating {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  .rating-star {
    height: 32px;
    width: 32px;
  }

  p {
    position: relative;
    top: -24px;
    font-weight: 700;
    font-size: 12px;
  }
}
</style>

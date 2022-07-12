<template>
  <div class="total-rating">
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
.total-rating {
  background-image: url('../../assets/images/star_rate.svg');
  background-repeat: no-repeat;
  p {
    text-align: center;
    font-weight: 700;
    font-size: 1rem;
  }
}
</style>

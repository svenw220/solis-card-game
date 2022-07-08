<template>
  <div class="total-rating"></div>
</template>

<script>
export default {
  name: 'TotalRating',
  components: {},
  props: {},
  data() {
    return {
      tRating: {
        type: String,
        default: 0,
      },
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.total-rating {
}
</style>

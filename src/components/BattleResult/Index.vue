<template>
  <section class="battle-result">
    <b-button type="is-primary">Back to matchmaking</b-button>
    <b-button>Go to home</b-button>
  </section>
</template>

<script>
export default {
  name: 'ResultPopup',
  components: {},
  props: {
    battleResult: {
      type: Boolean,
      default: true,
    },
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
.battle-result {
}
</style>

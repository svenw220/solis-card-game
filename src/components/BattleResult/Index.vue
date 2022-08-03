<template>
  <section
    class="battle-result is-flex is-flex-direction-column is-align-items-center"
  >
    <b-image
      :src="require('@/assets/images/victory.svg')"
      alt="Result"
      class="is-128x128 is-align-self-center mb-4"
    />
    <p class="mb-2">Yaay! You have won the game!</p>
    <p class="mb-6">
      Congrats on winning this game, now you can play another game or you can go
      home
    </p>
    <button class="button is-medium is-primary mb-2">
      Back to matchmaking
    </button>
    <button class="button is-medium">
      Go to home
    </button>
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
  width: 410px;
}
</style>

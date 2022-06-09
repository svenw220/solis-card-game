<template>
  <div class="deck is-flex is-flex-direction-column is-align-items-center">
    <b-image
      class="turn-state"
      :src="require('@/assets/images/deck1.svg')"
      alt="Turn State"
      rounded
    />
    <b-image
      class="deck-rating"
      :src="require('@/assets/images/star_rating.svg')"
      alt="Deck Rating"
    />
  </div>
</template>

<script>
/* ============
 * Home Index Page
 * ============
 *
 * The home index page.
 */

export default {
  /**
   * The name of the page.
   */
  name: 'Avatar',
  /**
   * The components that the page can use.
   */

  components: {},
  props: {
    name: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="scss" scoped>
.deck {
  .turn-state {
    height: 56px;
    width: 56px;
  }

  .deck-rating {
    height: 30px;
    width: 30px;
    margin-top: -1rem;
  }
}
</style>

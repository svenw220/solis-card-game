<template>
  <drag :transfer-data="deckData.attr">
    <div class="deck is-flex is-flex-direction-column is-align-items-center">
      <b-image
        class="turn-state"
        :src="require('@/assets/images/' + this.deckData.img + '.svg')"
        alt="Turn State"
        rounded
      />
      <b-image
        class="deck-rating"
        :src="require('@/assets/images/star_rating.svg')"
        alt="Deck Rating"
      />
    </div>
  </drag>
</template>

<script>
/* ============
 * Home Index Page
 * ============
 *
 * The home index page.
 */

import { Drag } from 'vue-drag-drop';

export default {
  /**
   * The name of the page.
   */
  name: 'Avatar',
  /**
   * The components that the page can use.
   */

  components: { Drag },
  props: {
    deckData: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.deck {
  margin-right: 1rem;
  &:last-child {
    margin-right: 0;
  }

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

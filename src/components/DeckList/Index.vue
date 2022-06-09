<template>
  <div class="deck-container">
    <div class="deck-header"></div>

    <div class="deck-list">
      <Deck v-for="deck in decks" :imgUrl="deck" :key="deck" />
    </div>
  </div>
</template>

<script>
/* ============
 * Home Index Page
 * ============
 *
 * The home index page.
 */
import Deck from '@/components/Deck/Index.vue';

export default {
  /**
   * The name of the page.
   */
  name: 'DeckList',
  /**
   * The components that the page can use.
   */

  components: { Deck },
  props: {},
  data() {
    return {
      decks: ['deck1', 'deck2', 'deck3'],
    };
  },
};
</script>

<style lang="scss" scoped>
.deck-container {
  margin-top: 40px;
  .deck-list {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
}
</style>

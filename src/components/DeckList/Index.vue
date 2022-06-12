<template>
  <div class="deck-container">
    <div class="deck-header">
      <img src="@/assets/images/line_left.svg" alt="Left Line" />
      <p class="deck-couter">Deck ({{ deckCounter }})</p>
      <img src="@/assets/images/line_right.svg" alt="Right Line" />
    </div>

    <draggable class="deck-list" v-model="decks" group="arenas" :move="onMove">
      <Deck v-for="(deck, index) in decks" :imgUrl="deck" :key="index" />
    </draggable>
  </div>
</template>

<script>
/* ============
 * Home Index Page
 * ============
 *
 * The home index page.
 */
import draggable from 'vuedraggable';
import Deck from '@/components/Deck/Index.vue';

export default {
  /**
   * The name of the page.
   */
  name: 'DeckList',
  /**
   * The components that the page can use.
   */

  components: { Deck, draggable },
  props: {},
  data() {
    return {
      decks: ['deck1', 'deck2', 'deck3', 'deck2', 'deck3', 'deck1'],
      deckCounter: 3,
    };
  },
  methods: {
    onMove(e) {
      console.log(e);
    },
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

  .deck-header {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 20px;
    .deck-couter {
      color: #8c8b91;
      margin: 0 1rem;
      font-size: 12px;
      font-weight: 700;
    }
  }
}
</style>

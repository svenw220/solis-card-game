<template>
  <div class="deck-container">
    <div class="deck-header">
      <img src="@/assets/images/line_left.svg" alt="Left Line" />
      <p class="deck-couter">Deck ({{ deckCounter }})</p>
      <img src="@/assets/images/line_right.svg" alt="Right Line" />
    </div>
    <div class="deck-list">
      <Deck v-for="(deck, index) in decks" :deckData="deck" :key="index" />
    </div>
  </div>
</template>

<script>
import Deck from '@/components/Deck/Index.vue';

export default {
  name: 'DeckList',
  components: { Deck },
  props: {},
  data() {
    return {
      decks: [
        {
          img: 'deck1',
          attr: 'purple',
        },
        {
          img: 'deck2',
          attr: 'blue',
        },
        {
          img: 'deck3',
          attr: 'yellow',
        },
        {
          img: 'deck2',
          attr: 'blue',
        },
        {
          img: 'deck3',
          attr: 'yellow',
        },
        {
          img: 'deck1',
          attr: 'purple',
        },
      ],
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

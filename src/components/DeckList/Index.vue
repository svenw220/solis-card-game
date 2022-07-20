<template>
  <div class="deck-container">
    <div class="deck-header">
      <img src="@/assets/images/line_left.svg" alt="Left Line" />
      <p class="deck-couter">Deck ({{ decks.length }})</p>
      <img src="@/assets/images/line_right.svg" alt="Right Line" />
    </div>
    <div class="deck-list">
      <Deck v-for="(deck, index) in decks" :deckData="deck" :key="index" />
    </div>
  </div>
</template>

<script>
/**
 * TODO: feature when the turn has been switched
 */
import { mapGetters } from 'vuex';
import Deck from '@/components/Deck/Index.vue';

export default {
  name: 'DeckList',
  components: { Deck },
  props: {},
  data() {
    return {
      decks: [],
    };
  },
  computed: {
    ...mapGetters('deck', ['getDeckListByTurn']),
    ...mapGetters('game', ['getTurn']),
  },
  created() {
    const curTurn = this.$store.getters['game/getTurn'];
    const myDeckList = this.$store.getters['deck/getDeckListByTurn'](curTurn);
    this.decks = myDeckList.map((deck) => {
      const { ability, ...rest } = deck;
      const total = Object.values(ability).reduce((a, b) => a + b);
      const newAbility = {
        ...ability,
        total: Math.floor(total / 4),
      };
      return {
        ...rest,
        ability: newAbility,
      };
    });
  },
  methods: {},
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

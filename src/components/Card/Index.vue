<template>
  <div v-if="cardInfo.meta" class="game-card">
    <div class="card-header-section">
      <p>Octopus</p>
      <TotalRating :t-rating="cardInfo.ability.total" />
      <p>#99999</p>
    </div>

    <img
      :src="require('@/assets/images/black_' + cardInfo.meta + '.svg')"
      alt="Card"
      @click="handleCard(cardInfo, index, $event)"
    />

    <div class="item-list">
      <Item
        v-for="(value, name) in abilities"
        :key="name"
        :item-type="name"
        :item-value="value"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState, mapActions } from 'vuex';
import TotalRating from '@/components/TotalRating/Index.vue';
import EndowmentPopup from '@/components/EndowmentPopup/Index.vue';
import Item from '@/components/Item/Index.vue';

export default {
  name: 'Card',
  components: { TotalRating, Item },
  props: {
    cardInfo: {
      type: [Object, Boolean, String],
      default() {
        return {};
      },
    },
    index: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters('game', ['getMovingCard', 'getFirstTurn', 'getBattleCards']),
    ...mapGetters('endowment', ['getEndowmentState']),
    ...mapGetters('strategy', ['getFullStrategyState']),
    ...mapState('strategy', [
      'turn',
      'round',
      'info',
      'condition',
      'count',
      'activeCardId',
    ]),
    abilities() {
      const asArray = Object.entries(this.cardInfo.ability);
      const filtered = asArray.filter(([key]) => key !== 'total');
      return Object.fromEntries(filtered);
    },
  },

  methods: {
    ...mapActions('strategy', [
      'setActiveCard',
      'tapOppoCards',
      'clearStrategyCount',
    ]),
    ...mapActions('game', ['switchTurn', 'cardSetupPhase']),
    handleCard(card, index) {
      this.$store.commit('endowment/SET_CURRENT_CARD', card);
      const cardPos = this.$store.getters['game/getCardPosById'](card.id);
      const currentTurn = this.$store.getters['game/getTurn'];
      const endowment = this.$store.getters['endowment/getEndowmentState'];

      if (
        // eslint-disable-next-line operator-linebreak
        this.condition &&
        // eslint-disable-next-line operator-linebreak
        cardPos === currentTurn &&
        this.activeCardId === null
      ) {
        if (this.count) this.setActiveCard(index);
      } else if (
        // eslint-disable-next-line operator-linebreak
        this.condition &&
        // eslint-disable-next-line operator-linebreak
        cardPos !== currentTurn &&
        this.activeCardId !== null
      ) {
        const payload = { id: index, turn: currentTurn };
        if (this.count > 0) this.tapOppoCards(payload);
        if (this.count === 0) {
          this.switchTurn();
          this.clearStrategyCount();
        }
      }

      if (endowment && cardPos === currentTurn) {
        this.$buefy.modal.open({
          parent: this,
          component: EndowmentPopup,
          hasModalCard: true,
          customClass: 'custom-class custom-class-2',
          trapFocus: true,
        });
      } else {
        console.log('This is not your turn!');
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.game-card {
  display: inline-block;
  background: white;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 0px 16px;
  height: 282px;
  width: 184px;
  z-index: 99999;

  img {
    display: inline-block;
  }

  .card-header-section {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 8px;

    p {
      font-size: 12px;
      font-weight: 700;
      color: #191824;
      &:first-child,
      &:last-child {
        align-self: end;
      }
    }
  }

  .category {
    position: absolute;
    left: 8px;
    top: 54px;
    background: white;
    padding: 8px;
    border-radius: 50%;
  }

  .item-list {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .property-item {
      margin-right: 6px;
      &:last-child {
        align-self: flex-end;
      }
    }
  }
}
</style>

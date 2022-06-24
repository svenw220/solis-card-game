<template>
  <div :key="newKey" :class="['arena-container', { oppo: this.turn }]">
    <drop
      v-for="(item, i) in cards"
      :key="i"
      class="card-item"
      @drop="handleDrop(i)"
    >
      <drag :transfer-data="i" @dragstart="setFrom">
        <b-image
          :id="item"
          class="turn-state"
          :src="require('@/assets/images/' + item + '.svg')"
          alt="Turn State"
        />
      </drag>
    </drop>
  </div>
</template>

<script>
/* ============
 * Home Index Page
 * ============
 *
 * The home index page.
 */
import { mapGetters, mapActions } from 'vuex';

export default {
  /**
   * The name of the page.
   */
  name: 'PlayerArena',
  /**
   * The components that the page can use.
   */

  components: {},
  props: {
    turn: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      ...mapGetters('game', ['getCardsByTurn']),
      newKey: '',
    };
  },
  computed: {
    cards() {
      return this.$store.getters['game/getCardsByTurn'](this.turn);
    },
  },
  methods: {
    ...mapActions('game', ['setEndowmentTime']),
    handleDrop(to) {
      const tmp = this.cards;
      this.newKey = Math.random();
      try {
        const curMovingCard = this.$store.getters['game/getMovingCard'];
        if (!curMovingCard.length) throw new Error();
        this.$store.commit('game/PUT_CARD_BY_TURN', to);

        this.$store.commit('game/CLEAR_MOVING_CARD');

        if (!tmp.includes('dashed_board') && this.turn === 'oppo') {
          this.setEndowmentTime();
        }
      } catch (error) {
        console.log(error);
      }

      // TODO: SWAP CARDS
      // this.myCards = tmp;
      // console.log(this.myCards);
      // [tmp[to], tmp[this.from]] = [tmp[this.from], tmp[to]];
      // this.myCards = tmp.splice(0, 3);
    },
    setFrom(item) {
      console.log(item);
    },
  },
};
</script>

<style lang="scss" scoped>
.arena-container {
  display: flex;
  flex-direction: row;
  justify-content: center;

  &.oppo {
    .card-item {
      //border: 1px solid #ba2929;
      box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
      border-radius: 8px;
    }
  }

  .card-item {
    height: 246px;
    width: 184px;
    background: #f5f5fa;
    border-radius: 8px;
    margin-right: 40px;
    &:last-child {
      margin-right: 0;
    }

    &:first-child,
    &:last-child {
      margin-top: 5rem;
    }
  }
}

.opponent-arena {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 40px;
  .card-item {
    height: 246px;
    width: 184px;
    background: #fffcfa;
    border: 1px dashed #bcbbc9;
    border-radius: 8px;
    margin-right: 40px;
    &:last-child {
      margin-right: 0;
    }

    &:first-child,
    &:last-child {
      position: relative;
      bottom: 5rem;
    }
  }
}
</style>

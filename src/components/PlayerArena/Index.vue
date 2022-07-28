<template>
  <div :key="newKey" :class="['arena-container', { oppo: this.role }]">
    <drop
      v-for="(item, i) in cards"
      :key="i"
      class="card-item"
      @drop="handleDrop(i)"
    >
      <drag :transfer-data="i" @dragstart="setFrom">
        <GameCard :cardInfo="item" />
      </drag>
    </drop>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import GameCard from '@/components/Card/Index.vue';

export default {
  name: 'PlayerArena',
  components: { GameCard },
  props: {
    role: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      ...mapGetters('game', ['getCardsByTurn']),
      newKey: '',
      gameCards: [],
    };
  },
  computed: {
    cards() {
      return this.$store.getters['game/getCardsByTurn'](this.role);
    },
    currentTurn() {
      return this.$store.getters['game/getTurn'];
    },
    cardSetupState() {
      return this.$store.getters['game/getCardSetUpState'];
    },
  },

  methods: {
    ...mapActions('game', ['setEndowmentTime, setTurn, updateCardSetupState']),
    handleDrop(to) {
      this.newKey = Math.random();
      try {
        if (this.role === this.currentTurn) {
          this.$store.commit('game/PUT_CARD_BY_TURN', to);
          this.$store.commit('game/FULL_CARD_SETUP');
          if (this.cardSetupState) {
            this.$store.commit('game/SET_ENDOWMENT_TIME');
          } else {
            this.$store.commit('game/SWITCH_TURN');
          }
        }
        // this.$store.commit('game/CLEAR_MOVING_CARD');
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
    test(e) {
      console.log(e.target);
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
      box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
      border-radius: 8px;
      transition: all 0.5s;

      &:first-child,
      &:last-child {
        position: relative;
        bottom: 5rem;
      }

      &:nth-child(2) {
        place-self: end;
      }

      &:hover {
        cursor: pointer;
        transform: scale(1.1, 1.1);
      }
    }
  }

  .card-item {
    height: 246px;
    width: 184px;
    background: #f5f5fa;
    border-radius: 8px;
    margin-right: 40px;
    transition: all 0.5s;

    &:last-child {
      margin-right: 0;
    }

    &:first-child,
    &:last-child {
      margin-top: 5rem;
    }

    &:nth-child(2) {
      place-self: start;
    }

    &:hover {
      cursor: pointer;
      transform: scale(1.1, 1.1);
    }
  }
}
</style>

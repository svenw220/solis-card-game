<template>
  <div :key="newKey" :class="['arena-container', { oppo: this.role }]">
    <drop
      v-for="(item, i) in cards"
      :key="i"
      class="card-item"
      @drop="handleDrop(i)"
    >
      <drag :transfer-data="i" @dragstart="setFrom">
        <GameCard :card-info="item" />
      </drag>
    </drop>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';
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
    ...mapState('game', ['movingCard']),
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
  watch: {
    cards(newValue, oldValue) {
      console.log(newValue, oldValue);
    },
  },
  methods: {
    ...mapActions('game', ['putCardByTurn', 'switchTurn']),
    ...mapActions('deck', ['updateDeckList']),
    handleDrop(to) {
      this.newKey = Math.random();
      try {
        if (this.role === this.currentTurn) {
          this.putCardByTurn(to);
          this.updateDeckList(this.movingCard.id);
          if (this.cardSetupState) {
            this.$store.commit('endowment/SET_ENDOWMENT_TIME', true);
          } else {
            this.switchTurn();
          }
        }
        // this.$store.commit('game/CLEAR_MOVING_CARD');
      } catch (error) {
        console.log(error);
      }
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

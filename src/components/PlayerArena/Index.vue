<template>
  <div :class="['arena-container', { oppo: this.turn }]">
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
import { mapGetters } from 'vuex';

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
    };
  },
  computed: {
    cards() {
      const myCards = [...this.getCardsByTurn()(this.turn)];
      console.log(myCards);
      return myCards;
    },
  },
  methods: {
    handleDrop(item) {
      console.log(item);
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
  .card-item {
    height: 246px;
    width: 184px;
    background: #f5f5fa;
    border: 1px dashed #bcbbc9;
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

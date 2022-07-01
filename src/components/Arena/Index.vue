<template>
  <div class="arena">
    <PlayerArena turn="oppo" />
    <div class="announcments">
      <div v-if="this.endowmentTime">
        <h3>Endowment Phase ✨</h3>
        <p>Please pick and distribute your 5 points wisely among your cards</p>
      </div>
      <p v-else class="comment">It’s your turn, please place a card 😬</p>
    </div>
    <div class="my-arena">
      <drop
        v-for="(item, i) in myCards"
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
    <DeckList />
  </div>
</template>

<script>
/* ============
 * Home Index Page
 * ============
 *
 * The home index page.
 */

import PlayerArena from '@/components/PlayerArena/Index.vue';
import DeckList from '@/components/DeckList/Index.vue';
import { Drag, Drop } from 'vue-drag-drop';
import { mapState } from 'vuex';

export default {
  /**
   * The name of the page.
   */
  name: 'Arena',
  /**
   * The components that the page can use.
   */

  components: {
    PlayerArena,
    Drag,
    Drop,
    DeckList,
  },
  data() {
    return {
      myCards: ['dashed_board', 'dashed_board', 'dashed_board'],
      from: '',
    };
  },
  computed: {
    ...mapState('game', ['endowmentTime']),
  },
  methods: {
    handleDrop(to) {
      const tmp = this.myCards;

      try {
        const curMovingCard = this.$store.getters['game/getMovingCard'];
        if (!curMovingCard.length) throw new Error();
        tmp[to] = curMovingCard;
        this.myCards = [...tmp];

        this.$store.commit('game/CLEAR_MOVING_CARD');

        if (!tmp.includes('dashed_board')) {
          this.$store.commit('game/SWITCH_TURN');
        }
      } catch (error) {
        console.log(error);
      }
      // this.myCards = tmp;
      // console.log(this.myCards);
      // [tmp[to], tmp[this.from]] = [tmp[this.from], tmp[to]];
      // this.myCards = tmp.splice(0, 3);
    },
    setFrom(from) {
      this.from = from;
    },
  },
};
</script>

<style lang="scss" scoped>
.arena {
  height: 100%;
  padding: 40px 131px;

  .announcments {
    text-align: center;
    margin: 72px 0;

    h3 {
      font-weight: 700;
      font-size: 18px;
    }
  }

  .my-arena {
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
      transition: all 0.5s;

      &:last-child {
        margin-right: 0;
      }

      &:first-child,
      &:last-child {
        margin-top: 5rem;
      }

      &:hover {
        cursor: pointer;
        transform: scale(1.1, 1.1);
      }
    }
  }
}
</style>

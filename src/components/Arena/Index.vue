<template>
  <div class="arena">
    <draggable class="opponent-arena" v-model="opponentCards">
      <div v-for="item in opponentCards" class="card-item" :key="item">
        {{ item }}
      </div>
    </draggable>
    <div class="announcments">
      <div v-if="fullState">
        <h3>Endowment Phase ✨</h3>
        <p>Please pick and distribute your 5 points wisely among your cards</p>
      </div>
      <p v-else class="comment">It’s your turn, please place a card 😬</p>
    </div>
    <draggable
      class="my-arena"
      v-model="myCards"
      :group="{ name: 'arenas', pull: 'null' }"
    >
      <div v-for="item in myCards" class="card-item" :key="item">
        {{ item }}
      </div>
    </draggable>
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

import DeckList from '@/components/DeckList/Index.vue';

import draggable from 'vuedraggable';

export default {
  /**
   * The name of the page.
   */
  name: 'Arena',
  /**
   * The components that the page can use.
   */

  components: { draggable, DeckList },
  props: {
    fullState: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      myCards: ['Card Slot 1', 'Card Slot 2', 'Card Slot 3'],
      opponentCards: [
        'Oppo Card Slot 1',
        'Oppo Card Slot 2',
        'Oppo Card Slot 3',
      ],
    };
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
}
</style>

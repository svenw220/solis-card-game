<template>
  <section :class="['game-page columns is-desktop', { endowment: endowment }]">
    <div class="first-panel column is-2">
      <PlayerPanel />
    </div>
    <div class="main-panel column is-8"><Arena /></div>
    <div class="last-panel column is-2">
      <RightPanel />
    </div>
  </section>
</template>

<script>
/* ============
 * Game Index Page
 * ============
 *
 * The game index page.
 */
import PlayerPanel from '@/components/PlayerPanel/Index.vue';
import Arena from '@/components/Arena/Index.vue';
import RightPanel from '@/components/RightPanel/Index.vue';

export default {
  /**
   * The name of the page.
   */
  name: 'GamePage',
  /**
   * The components that the page can use.
   */
  components: {
    PlayerPanel,
    Arena,
    RightPanel,
  },
  props: {},
  data() {
    return {};
  },
  computed: {
    endowment() {
      return this.$store.getters['endowment/getEndowmentState'];
    },
    getTurn() {
      return this.$store.getters['game/getTurn'];
    },
  },
};
</script>

<style lang="scss" scoped>
.game-page {
  height: 100vh;
  overflow-y: hidden;
  &.columns {
    margin: 0;
  }
  .column {
    padding-left: 0;
    padding-right: 0;
  }

  div {
    &:first-child,
    &:last-child {
      box-shadow: inset 2px 0px 0px #e6e5e8;
    }
  }

  .main-panel {
    //background-color: #f0ebeb;
  }

  &.endowment {
    .first-panel,
    .last-panel,
    .main-panel {
      background-color: #e0dedea6;
    }
  }
}
</style>

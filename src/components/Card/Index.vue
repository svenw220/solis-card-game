<template>
  <div class="game-card">
    <div class="card-title">Card overview</div>
    <img
      src="@/assets/images/card_overview.svg"
      alt="Card overview"
      @click="endowmentPopup"
    />
  </div>
</template>

<script>
/* ============
 * Home Index Page
 * ============
 *
 * The home index page.
 */

import EndowmentPopup from '@/components/EndowmentPopup/Index.vue';

export default {
  /**
   * The name of the page.
   */
  name: 'Card',
  /**
   * The components that the page can use.
   */

  components: {},
  props: {},
  data() {
    return {};
  },
  methods: {
    endowmentPopup() {
      const endowmentState = this.$store.getters['game/getEndowmentState'];
      if (endowmentState) {
        this.$buefy.modal.open({
          parent: this,
          component: EndowmentPopup,
          hasModalCard: true,
          customClass: 'custom-class custom-class-2',
          trapFocus: true,
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.game-card {
  margin-top: 100px;
  margin-bottom: 100px;
  .card-title {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 4px;
  }

  img {
    width: 100%;
  }
}
</style>

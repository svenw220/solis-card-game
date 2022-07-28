<template>
  <div class="card-overview">
    <div class="overview-title">Card overview</div>
    <Card :cardInfo="getMovingCard" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Card from '@/components/Card/Index.vue';
import EndowmentPopup from '@/components/EndowmentPopup/Index.vue';

export default {
  /**
   * The name of the page.
   */
  name: 'EndowmentCard',
  /**
   * The components that the page can use.
   */

  components: { Card },
  props: {},
  data() {
    return {};
  },
  computed: {
    ...mapGetters('game', ['getMovingCard']),
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
.card-overview {
  margin-top: 100px;
  margin-bottom: 100px;
  .overview-title {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 4px;
  }

  .game-card {
    img {
      width: 100%;
      transition: all 0.3s;
      &:hover {
        transform: scale(1.02, 1.02);
      }
    }
  }
}
</style>

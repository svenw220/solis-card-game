<template>
  <section class="endowment-popup">
    <form action="">
      <div class="modal-card" style="width: auto">
        <header class="modal-card-head">
          <div class="modal-card-title">
            <p>Endowment</p>
            <p>#octopus99999</p>
          </div>
          <p class="endowment-points">{{ this.points }} points</p>
        </header>
        <section class="modal-card-body">
          <div v-for="item in this.getCurrentCardInfo.ability" :key="item">
            <EnhancementItem :itemValue="item" />
          </div>
        </section>
        <footer class="modal-card-foot">
          <b-button label="Cancel" @click="$emit('close')" />
          <b-button label="Add" type="is-primary" />
        </footer>
      </div>
    </form>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';
import EnhancementItem from '@/components/EnhancmentItem/Index.vue';

export default {
  /**
   * The name of the page.
   */
  name: 'EndowmentPopup',
  /**
   * The components that the page can use.
   */
  components: { EnhancementItem },
  props: {
    points: {
      type: Number,
      default: 5,
    },
  },
  computed: {
    ...mapGetters('endowment', ['getCurrentCardInfo']),
  },
};
</script>

<style lang="scss" scoped>
.endowment-popup {
  width: 600px;
  height: 400px;
}
.modal-card {
  $root: &;
  &-head {
    #{$root}-title {
      p:first-child {
        font-weight: 600;
        font-size: 12px;
        line-height: 18px;
        color: #74737d;
      }

      p:last-child {
        font-weight: 600;
        font-size: 18px;
        line-height: 24px;
        color: #000000;
      }
    }

    .endowment-points {
      font-weight: 700;
      font-size: 18px;
      line-height: 24px;
      color: #34a267;
    }
  }
}
</style>

<template>
  <section class="endowment-popup">
    <form action="">
      <div class="modal-card">
        <header class="modal-card-head">
          <div class="modal-card-title">
            <p>Endowment</p>
            <p>#octopus99999</p>
          </div>
          <p class="endowment-points">{{ points }} points</p>
        </header>
        <section class="modal-card-body">
          <EnhancementItem
            v-for="(item, index) in convertedCardInfo"
            :key="index"
            :item-value="item"
            :give-power="increaseAbility"
          />
        </section>
        <footer class="modal-card-foot">
          <b-button label="Cancel" @click="$emit('close')" />
          <b-button
            label="Add"
            type="is-primary"
            @click="applyEndowment(endowmentResult, $event)"
          />
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
  data() {
    return {
      endowmentResult: {
        attack: 0,
        defense: 0,
        evasion: 0,
        hp: 0,
      },
    };
  },
  computed: {
    ...mapGetters('endowment', ['getCurrentCardInfo']),
    convertedCardInfo() {
      const rawData = Object.entries(this.endowmentResult).filter(
        ([title]) => title !== 'total',
      );
      return rawData;
    },
  },
  mounted() {
    this.endowmentResult = this.getCurrentCardInfo.ability;
  },
  methods: {
    increaseAbility(name, cardInfo) {
      this.endowmentResult = {
        ...this.endowmentResult,
        [name]: cardInfo,
      };
    },
    applyEndowment(result) {
      const { id } = this.getCurrentCardInfo;
      this.$store.commit('game/APPLY_ENDOWMENT', { id, result });
      this.$emit('close');
    },
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
  width: auto;
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

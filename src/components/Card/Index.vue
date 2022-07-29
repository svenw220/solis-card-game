<template>
  <div v-if="this.cardInfo" class="game-card">
    <div class="card-header-section">
      <p>Octopus</p>
      <TotalRating />
      <p>#99999</p>
    </div>
    <img
      :src="require('@/assets/images/black_' + cardInfo.meta + '.svg')"
      alt="Card"
      @click="handleCard(cardInfo, $event)"
    />

    <div class="item-list">
      <Item itemType="attack" :itemValue="cardInfo.ability.attack" />
      <Item itemType="defense" :itemValue="cardInfo.ability.defense" />
      <Item itemType="evasion" :itemValue="cardInfo.ability.evasion" />
      <Item itemType="total" :itemValue="cardInfo.ability.total" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import TotalRating from '@/components/TotalRating/Index.vue';
import EndowmentPopup from '@/components/EndowmentPopup/Index.vue';
import Item from '@/components/Item/Index.vue';

export default {
  name: 'Card',
  components: { TotalRating, Item },
  props: {
    state: {
      type: Boolean,
      default: false,
    },
    cardInfo: {
      type: Object,
    },
  },
  data() {
    return {
      abilities: [],
    };
  },
  computed: {
    ...mapGetters('game', ['getMovingCard']),
  },
  watch: {},

  methods: {
    handleCard(card) {
      this.$store.commit('endowment/SET_CURRENT_CARD', card);
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
  display: inline-block;
  background: white;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 0px 16px;
  height: 282px;
  width: 184px;
  z-index: 99999;

  img {
    display: inline-block;
  }

  .card-header-section {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 8px;

    p {
      font-size: 12px;
      font-weight: 700;
      color: #191824;
      &:first-child,
      &:last-child {
        align-self: end;
      }
    }
  }

  .category {
    position: absolute;
    left: 8px;
    top: 54px;
    background: white;
    padding: 8px;
    border-radius: 50%;
  }

  .item-list {
    display: inline-flex;
    flex-direction: row;
    justify-content: space-between;
    > .property-item {
      margin-right: 6px;
    }

    .total {
      align-self: end;
    }
  }
}
</style>

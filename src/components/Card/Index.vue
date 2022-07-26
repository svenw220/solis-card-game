<template>
  <div class="game-card">
    <div class="card-header-section">
      <p>Octopus</p>
      <TotalRating />
      <p>#99999</p>
    </div>
    <img
      :src="require('@/assets/images/black_' + cardType.meta + '.svg')"
      alt="Card"
    />

    <div class="item-list">
      <Item itemType="attack" :itemValue="cardType.ability.attack" />
      <Item itemType="defense" :itemValue="cardType.ability.defense" />
      <Item itemType="evasion" :itemValue="cardType.ability.evasion" />
      <div class="total"></div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import TotalRating from '@/components/TotalRating/Index.vue';
import Item from '@/components/Item/Index.vue';

export default {
  name: 'Card',
  components: { TotalRating, Item },
  props: {
    state: {
      type: Boolean,
      default: false,
    },
    cardType: {
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
  created() {
    this.abilities = this.getMovingCard.ability;
  },
  methods: {},
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
  }
}
</style>

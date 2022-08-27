<template>
  <drag
    class="deck-parent"
    :transfer-data="deckData.id"
    @dragstart="setMovingCard(deckData)"
  >
    <div class="deck is-flex is-flex-direction-column is-align-items-center">
      <b-image
        class="turn-state"
        :src="require('@/assets/images/' + deckData.meta + '_deck.svg')"
        alt="Turn State"
        rounded
      />
      <TotalRating :t-rating="deckData.ability.total" />
    </div>
  </drag>
</template>

<script>
import { Drag } from 'vue-drag-drop';
import { mapActions } from 'vuex';
import TotalRating from '@/components/TotalRating/Index.vue';

export default {
  name: 'Avatar',
  components: { Drag, TotalRating },
  props: {
    deckData: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {};
  },
  mounted() {
  },
  methods: {
    ...mapActions('game', ['setMovingCard']),
  },
};
</script>

<style lang="scss" scoped>
.deck-parent {
  &:hover {
    transition: all 0.2s;
    transform: scaleZ(2);
  }
}

.deck {
  &:hover {
    cursor: pointer;
  }

  margin-right: 1rem;
  &:last-child {
    margin-right: 0;
  }

  .turn-state {
    height: 56px;
    width: 56px;
  }

  .total-rating {
    height: 30px;
    width: 30px;
    margin-top: -1rem;
  }
}
</style>

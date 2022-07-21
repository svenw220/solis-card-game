<template>
  <div class="game-card">
    <div class="card-header-section">
      <p>Octopus</p>
      <TotalRating />
      <p>#99999</p>
    </div>
    <img class="category" src="@/assets/images/type.svg" alt="Category" />
    <img src="@/assets/images/black_blue.svg" alt="Card" />
    <div class="item-list">
      <div class="main-list">
        <Item itemType="attack" itemValue="98" />
        <Item itemType="defense" itemValue="98" />
        <Item itemType="evasion" itemValue="98" />
      </div>
      <div class="total"></div>
    </div>
  </div>
</template>

<script>
/* ============
 * Home Index Page
 * ============
 *
 * The home index page.
 */
import TotalRating from '@/components/TotalRating/Index.vue';
import Item from '@/components/Item/Index.vue';

export default {
  name: 'Card',
  components: { TotalRating, Item },
  props: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.game-card {
  display: inline-block;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 0px 16px;

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
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .main-list {
      > div {
        margin-right: 4px;
      }
    }
  }
}
</style>

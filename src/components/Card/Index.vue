<template>
  <div class="card">
    <div class="card-header-section">
      <p>Octopus</p>
      <TotalRating />
      <p>#99999</p>
    </div>
    <img class="category" src="@/assets/images/type.svg" alt="Category" />
    <img src="@/assets/images/black_blue.svg" alt="Card" />
    <div class="item-list">
      this is item list
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

export default {
  name: 'Card',
  components: { TotalRating },
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
.card {
  display: inline-flex;
  flex-direction: column;
  padding: 0px 16px;

  /*
  .total-rating {
    position: absolute;
    align-self: center;
  }
  */

  .card-header-section {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 8px;

    p {
      font-size: 12px;
      font-weight: 700;
      color: #191824;
    }
  }

  .category {
    //position: absolute;
    //left: 8px;
    //top: 20px;
    background: white;
    padding: 8px;
    border-radius: 50%;
  }
}
</style>

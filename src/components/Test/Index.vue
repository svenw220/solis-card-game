<template>
  <div class="card-item">
    <div class="card-item-header"></div>
    <img src="@/assets/images/black_yellow.svg" alt="Card image" />
    <div class="card-item-footer">
      <div class="card-item-footer-head">
        <Attack />
        <Accuracy />
        <Evasion />
      </div>
      <!-- <div class="card-item-footer-tail"><Hp width="80" height="80" /></div> -->
    </div>
  </div>
</template>

<script>
import Attack from '@/components/CardIcon/attack.vue';
import Accuracy from '@/components/CardIcon/accuracy.vue';
import Evasion from '@/components/CardIcon/evasion.vue';
// import Hp from '@/components/CardIcon/hp.vue';

export default {
  name: 'Hero',
  // eslint-disable-next-line object-curly-newline
  components: { Attack, Accuracy, Evasion },
};
</script>

<style lang="scss" scoped>
.card-item {
  height: 282px;
  width: 184px;
  &-footer {
    display: inline-flex;
    flex-direction: row;
    justify-content: space-between;

    &-head {
      display: flex;
      flex-direction: row;
      > div {
        margin-right: 4px;
      }
    }
  }
}
</style>

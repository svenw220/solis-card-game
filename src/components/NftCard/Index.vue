<template>
  <section class="nft-card"></section>
</template>

<script>
export default {
  name: 'NftCard',
  components: {},
};
</script>

<style lang="scss" scoped>
.nft-card {
  height: 262px;
  width: 193px;
  background-color: #dcfcf4;
  border-radius: 1rem;

  margin-bottom: 1.5rem;

  &:last-child {
    margin-bottom: 0;
  }
}
</style>

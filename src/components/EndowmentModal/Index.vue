<template>
  <section class="endowment-modal">
    <b-modal v-model="modalActive" :width="350" class="endowment-modal-content">
      <p>This is modal</p>
    </b-modal>
  </section>
</template>

<script>
/* ============
 * EndowmentModal Page
 * ============
 *
 * EndowmentModal page.
 */

export default {
  /**
   * The name of the page.
   */
  name: 'EndowmentModal',
  /**
   * The components that the page can use.
   */
  components: {},
  props: {
    modalActive: {
      type: Boolean,
      default: false,
    },
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
.endowment-modal-content {
  background-color: #fff;
}
</style>

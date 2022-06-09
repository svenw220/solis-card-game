<template>
  <div class="deck-list">
    <div class="deck-header"></div>
    <Deck name="deck1" />
  </div>
</template>

<script>
/* ============
 * Home Index Page
 * ============
 *
 * The home index page.
 */
import Deck from '@/components/Deck/Index.vue';

export default {
  /**
   * The name of the page.
   */
  name: 'DeckList',
  /**
   * The components that the page can use.
   */

  components: { Deck },
  props: {},
};
</script>

<style lang="scss" scoped>
.deck-list {
}
</style>

<template>
  <section
    class="avatar-container is-flex is-flex-direction-column is-align-items-center"
  >
    <b-image
      class="player-avatar"
      :src="require('@/assets/images/avatar.svg')"
      alt="Player Avatar"
      rounded
    />
    <p class="player-name has-text-weight-semibold">{{ playerTitle }}</p>
    <p class="wallet-address mb-2">{{ playerWalletAddr }}</p>
    <b-image
      class="turn-state"
      :src="require('@/assets/images/action.svg')"
      alt="Turn State"
    />
  </section>
</template>

<script>
/* ============
 * Home Index Page
 * ============
 *
 * The home index page.
 */

export default {
  /**
   * The name of the page.
   */
  name: 'Avatar',
  /**
   * The components that the page can use.
   */
  components: {},
  props: {
    playerTitle: {
      type: String,
      default: 'You',
    },
    playerWalletAddr: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="scss" scoped>
.avatar-container {
  .player-avatar {
    height: 78px;
    width: 80px;
    margin-bottom: 5px;
  }

  .player-name {
    color: #34a267;
    line-height: 1.5rem;
  }

  .wallet-address {
    color: #74737d;
  }

  .opponent-name {
    color: #ba2929;
  }

  .turn-state {
    height: 22px;
    width: 38px;
  }
}
</style>

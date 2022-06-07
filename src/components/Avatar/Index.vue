<template>
  <div
    class="avatar-container is-flex is-flex-direction-column is-align-items-center w-100"
  >
    <b-image
      class="player-avatar"
      :src="require('@/assets/images/avatar.svg')"
      alt="Player Avatar"
      rounded
    />
    <p
      :class="['player-name', { 'is-opponent': isOpponent }]"
      class="has-text-weight-semibold"
    >
      {{ playerTitle }}
    </p>
    <p class="wallet-address mb-2">{{ playerWalletAddr }}</p>
    <b-image
      class="turn-state"
      :src="require('@/assets/images/action.svg')"
      alt="Turn State"
    />
  </div>
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
    isOpponent: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.avatar-container {
  width: 100%;
  padding: 82px 162px;
  .player-avatar {
    height: 78px;
    width: 80px;
    margin-bottom: 5px;
  }

  .player-name {
    color: #34a267;
    line-height: 1.5rem;
    &.is-opponent {
      color: #ba2929;
    }
  }

  .wallet-address {
    color: #74737d;
  }

  .turn-state {
    height: 22px;
    width: 38px;
  }
}
</style>

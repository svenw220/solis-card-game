<template>
  <div class="navbar-container">
    <b-navbar>
      <template #brand>
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          <img src="@/assets/images/logo.png" alt="This is Logo" />
        </b-navbar-item>
      </template>
      <template #start>
        <b-navbar-item href="#">
          Home
        </b-navbar-item>
        <b-navbar-item href="#">
          The Lure
        </b-navbar-item>
        <b-navbar-item href="#">
          Game Guide
        </b-navbar-item>
        <b-navbar-item href="#">
          FAQs
        </b-navbar-item>
        <b-navbar-item href="#">
          NFTs Sale
        </b-navbar-item>
      </template>

      <template #end>
        <b-navbar-item tag="div">
          <div class="buttons">
            <a class="button">
              <strong>Connect Wallet</strong>
            </a>
          </div>
        </b-navbar-item>
      </template>
    </b-navbar>
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
  name: 'Navbar',

  /**
   * The components that the page can use.
   */
  components: {},
};
</script>

<style lang="scss" scoped>
.navbar {
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.12);
  border-radius: 16px;
}
</style>

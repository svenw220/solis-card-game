<template>
  <section class="endowment-popup">
    <form action="">
      <div class="modal-card" style="width: auto">
        <header class="modal-card-head">
          <p class="modal-card-title">Login</p>
          <button type="button" class="delete" />
        </header>
        <section class="modal-card-body">
          <b-field label="Email">
            <b-input type="email" placeholder="Your email" required> </b-input>
          </b-field>

          <b-field label="Password">
            <b-input
              type="password"
              password-reveal
              placeholder="Your password"
              required
            >
            </b-input>
          </b-field>

          <b-checkbox>Remember me</b-checkbox>
        </section>
        <footer class="modal-card-foot">
          <b-button label="Close" />
          <b-button label="Login" type="is-primary" />
        </footer>
      </div>
    </form>
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
  name: 'EndowmentPopup',
  /**
   * The components that the page can use.
   */
  components: {},
  props: {},
  computed: {},
};
</script>

<style lang="scss" scoped></style>

<template>
  <section class="endowment-popup">
    <form action="">
      <div class="modal-card" style="width: auto">
        <header class="modal-card-head">
          <div class="modal-card-title">
            <p>Endowment</p>
            <p>#octopus99999</p>
          </div>
          <p class="endowment-points">{{ this.points }} points</p>
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
  props: {
    points: {
      type: Number,
      default: 5,
    },
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
.endowment-popup {
  width: 600px;
  height: 400px;
}
.modal-card {
  $root: &;
  &-head {
    #{$root}-title {
      p:first-child {
        font-weight: 600;
        font-size: 12px;
        line-height: 18px;
        color: #74737d;
      }

      p:last-child {
        font-weight: 600;
        font-size: 18px;
        line-height: 24px;
        color: #000000;
      }
    }

    .endowment-points {
      font-weight: 700;
      font-size: 18px;
      line-height: 24px;
      color: #34a267;
    }
  }
}
</style>

<template>
  <div class="game-log">
    <p class="game-log-title">Game Log</p>
    <div class="log-list">
      <div class="logs">
        <p v-for="(log, index) in logs" :key="index" :class="log.type">
          {{ log.msg }}
        </p>
      </div>
      <div class="log-form">
        <input
          type="text"
          v-model="logMsg"
          @keyup.enter="addLog"
          placeholder="Type your message here..."
        />
        <b-button type="is-primary" @click="addLog">Send</b-button>
      </div>
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

export default {
  /**
   * The name of the page.
   */
  name: 'GameLog',
  /**
   * The components that the page can use.
   */

  components: {},
  props: {},
  data() {
    return {
      logs: [
        {
          type: 'oppo',
          msg: 'great game, man!',
        },
        {
          type: 'me',
          msg: 'Wohoo, thank you! you too 🔥',
        },
      ],
      logMsg: '',
    };
  },
  methods: {
    addLog() {
      if (this.logMsg.length) {
        const newLog = {
          type: 'me',
          msg: this.logMsg,
        };

        this.logs = [...this.logs, newLog];
        this.logMsg = '';
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.game-log {
  &-title {
    font-size: 20px;
    font-weight: 600;
    color: #191824;
    margin-bottom: 6px;
  }

  .log-list {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 14px 8px 8px 8px;
    border: 1px solid #e6e5e8;
    border-radius: 9.78261px;

    .logs {
      display: flex;
      flex-direction: column;
      p {
        display: inline-block;
        padding: 6px;
        font-size: 12px;
        margin-bottom: 6px;
        &.oppo {
          color: #fff;
          border-radius: 8px;
          background: #74737d;
          align-self: flex-start;
        }

        &.me {
          color: #74737d;
          border: 1px solid #e6e5e8;
          border-radius: 9.78261px;
          align-self: flex-end;
        }
      }
    }
    .log-form {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.12);
      border-radius: 8px;
      padding: 4px;

      input {
        border: none;
        &:focus-visible {
          outline: none;
        }
      }

      button {
        padding: 0.5rem;
        border-radius: 0.5rem;
        font-size: 12px;
      }
    }
  }
}
</style>

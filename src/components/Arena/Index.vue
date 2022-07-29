<template>
  <div class="arena">
    <PlayerArena :role="oppo" />
    <div class="announcments">
      <div v-if="this.condition">
        <h3>Endowment Phase ✨</h3>
        <p>Please pick and distribute your 5 points wisely among your cards</p>
      </div>
      <p v-if="!this.turn.current" class="comment">
        It’s your turn, please place a card 😬
      </p>
    </div>
    <PlayerArena />
    <DeckList />
  </div>
</template>

<script>
// TODO: add empty element
import { mapState, mapActions } from 'vuex';
import PlayerArena from '@/components/PlayerArena/Index.vue';
import DeckList from '@/components/DeckList/Index.vue';

export default {
  name: 'Arena',
  components: {
    PlayerArena,
    DeckList,
  },
  data() {
    return {
      me: true,
      oppo: true,
    };
  },
  computed: {
    ...mapState('endowment', ['condition']),
    ...mapState('game', ['turn']),
  },
  mounted() {
    this.getPlayersCardInfo();
  },
  methods: {
    ...mapActions('player', ['getPlayersCardInfo']),
  },
};
</script>

<style lang="scss" scoped>
.arena {
  height: 100%;
  padding: 40px 131px;

  .announcments {
    height: 30px;
    text-align: center;
    margin: 72px 0;

    h3 {
      font-weight: 700;
      font-size: 18px;
    }
  }
}
</style>

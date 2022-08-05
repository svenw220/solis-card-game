/* ============
 * State of the game module
 * ============
 *
 * The initial state of the game module.
 */

export default {
  decks: {
    myDecks: [
      {
        id: 1,
        type: 'Sapienoids',
        name: 'Aquasapiens',
        meta: 'yellow',
        ability: {
          attack: 90,
          evasion: 50,
          accuracy: 95,
          hp: 100,
        },
      },
      {
        id: 2,
        type: 'Sapienoids',
        name: 'Aquasapiens',
        meta: 'blue',
        ability: {
          attack: 80,
          evasion: 96,
          accuracy: 80,
          hp: 100,
        },
      },
      {
        id: 3,
        type: 'Sapienoids',
        name: 'Aquasapiens',
        meta: 'purple',
        ability: {
          attack: 50,
          evasion: 70,
          accuracy: 85,
          hp: 100,
        },
      },
      {
        id: 4,
        type: 'Sapienoids',
        name: 'Aquasapiens',
        meta: 'blue',
        ability: {
          attack: 94,
          evasion: 40,
          accuracy: 65,
          hp: 100,
        },
      },
      {
        id: 5,
        type: 'Sapienoids',
        name: 'Aquasapiens',
        meta: 'purple',
        ability: {
          attack: 92,
          evasion: 67,
          accuracy: 87,
          hp: 100,
        },
      },
    ],
    oppoDecks: [
      {
        id: 6,
        type: 'Sapienoids',
        meta: 'blue',
        name: 'Aurasapiens',
        ability: {
          attack: 84,
          evasion: 76,
          accuracy: 80,
          hp: 100,
        },
      },
      {
        id: 7,
        type: 'Sapienoids',
        name: 'Aurasapiens',
        meta: 'yellow',
        ability: {
          attack: 54,
          evasion: 86,
          accuracy: 81,
          hp: 100,
        },
      },
      {
        id: 8,
        type: 'Sapienoids',
        name: 'Aurasapiens',
        meta: 'purple',
        ability: {
          attack: 77,
          evasion: 91,
          accuracy: 84,
          hp: 100,
        },
      },
      {
        id: 9,
        type: 'Sapienoids',
        name: 'Aurasapiens',
        meta: 'purple',
        ability: {
          attack: 65,
          evasion: 91,
          accuracy: 89,
          hp: 100,
        },
      },
      {
        id: 10,
        type: 'Sapienoids',
        name: 'Aurasapiens',
        meta: 'yellow',
        ability: {
          attack: 60,
          evasion: 86,
          accuracy: 70,
          hp: 100,
        },
      },
    ],
  },
};

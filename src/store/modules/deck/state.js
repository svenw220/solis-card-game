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
          defense: 88,
          evasion: 50,
          accuracy: 95,
        },
      },
      {
        id: 2,
        type: 'Sapienoids',
        name: 'Aquasapiens',
        meta: 'blue',
        ability: {
          attack: 80,
          defense: 76,
          evasion: 96,
          accuracy: 80,
        },
      },
      {
        id: 3,
        type: 'Sapienoids',
        name: 'Aquasapiens',
        meta: 'purple',
        ability: {
          attack: 50,
          defense: 38,
          evasion: 70,
          accuracy: 85,
        },
      },
      {
        id: 4,
        type: 'Sapienoids',
        name: 'Aquasapiens',
        meta: 'blue',
        ability: {
          attack: 94,
          defense: 82,
          evasion: 40,
          accuracy: 65,
        },
      },
      {
        id: 5,
        type: 'Sapienoids',
        name: 'Aquasapiens',
        meta: 'purple',
        ability: {
          attack: 92,
          defense: 71,
          evasion: 67,
          accuracy: 87,
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
          defense: 56,
          evasion: 76,
          accuracy: 80,
        },
      },
      {
        id: 7,
        type: 'Sapienoids',
        name: 'Aurasapiens',
        meta: 'yellow',
        ability: {
          attack: 54,
          defense: 78,
          evasion: 86,
          accuracy: 81,
        },
      },
      {
        id: 8,
        type: 'Sapienoids',
        name: 'Aurasapiens',
        meta: 'purple',
        ability: {
          attack: 77,
          defense: 67,
          evasion: 91,
          accuracy: 84,
        },
      },
      {
        id: 9,
        type: 'Sapienoids',
        name: 'Aurasapiens',
        meta: 'purple',
        ability: {
          attack: 65,
          defense: 73,
          evasion: 91,
          accuracy: 89,
        },
      },
      {
        id: 10,
        type: 'Sapienoids',
        name: 'Aurasapiens',
        meta: 'yellow',
        ability: {
          attack: 60,
          defense: 76,
          evasion: 86,
          accuracy: 70,
        },
      },
    ],
  },
};

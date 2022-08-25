const strategyData = [
  [[0, 0], [1, 2], [2, 1]],
  [[0, 1], [1, 0], [2, 2]],
];

// eslint-disable-next-line max-len
// const calcPoints = (attacker, defenser) => defenser.hp - (attacker.attack * (attacker.accuracy - defenser.evasion)) / 100;

export const engine = (battleCards) => {
  const [myStrategy, oppoStrategy] = strategyData.flat(0);
  const [oppoCards, myCards] = battleCards;

  // eslint-disable-next-line no-restricted-syntax
  for (const strategy of myStrategy) {
    const [myPos, oppoPos] = strategy;
    const { ability: oppoAbility } = oppoCards[oppoPos];
    const { ability: myAbility } = myCards[myPos];
    const crossAttack = Math.abs(myPos - oppoPos) === 2;
    const accuracyPoint = crossAttack ? (myAbility.accuracy - 10) : myAbility.accuracy;
    // eslint-disable-next-line max-len
    oppoAbility.hp -= myAbility.attack * (Math.abs(accuracyPoint - oppoAbility.evasion) / 100);
  }
  // eslint-disable-next-line no-restricted-syntax
  for (const strategy of oppoStrategy) {
    const [oppoPos, myPos] = strategy;
    const { ability: oppoAbility } = oppoCards[oppoPos];
    const { ability: myAbility } = myCards[myPos];
    const crossAttack = Math.abs(myPos - oppoPos) === 2;
    const accuracyPoint = crossAttack ? (oppoAbility.accuracy - 10) : oppoAbility.accuracy;
    // eslint-disable-next-line max-len
    myAbility.hp -= oppoAbility.attack * (Math.abs(accuracyPoint - myAbility.evasion) / 100);
  }
  const remainingMyCards = myCards.filter((item) => item.ability.hp >= 0);
  const remainingOppoCards = oppoCards.filter((item) => item.ability.hp >= 0);

  if (!remainingMyCards.length || !remainingOppoCards.length) {
    const winner = remainingMyCards.length ? remainingMyCards : remainingOppoCards;
    console.log('End this game', winner);
  } else {
    engine([remainingOppoCards, remainingMyCards]);
  }
  // return [remainingOppoCards, remainingMyCards];
};

export default {
  engine,
};

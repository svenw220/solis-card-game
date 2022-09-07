export const engine = (battleCards, strategyData) => {
  const [oppoStrategy, myStrategy] = strategyData;
  const [oppoCards, myCards] = battleCards;
  // eslint-disable-next-line no-restricted-syntax
  for (const strategy of myStrategy) {
    const [myPos, oppoPos] = strategy;
    const { ability: oppoAbility } = oppoCards[oppoPos];
    const { ability: myAbility } = myCards[myPos];
    const crossAttack = Math.abs(myPos - oppoPos) === 2;
    const accuracyPoint = crossAttack
      ? myAbility.accuracy - 10
      : myAbility.accuracy;
    // eslint-disable-next-line max-len, operator-linebreak
    oppoAbility.hp -= Math.floor(
      myAbility.attack * (Math.abs(accuracyPoint - oppoAbility.evasion) / 100),
    );
  }
  // eslint-disable-next-line no-restricted-syntax
  for (const strategy of oppoStrategy) {
    const [oppoPos, myPos] = strategy;
    const { ability: oppoAbility } = oppoCards[oppoPos];
    const { ability: myAbility } = myCards[myPos];
    const crossAttack = Math.abs(myPos - oppoPos) === 2;
    const accuracyPoint = crossAttack
      ? oppoAbility.accuracy - 10
      : oppoAbility.accuracy;
    // eslint-disable-next-line max-len, operator-linebreak
    myAbility.hp -= Math.floor(
      oppoAbility.attack * (Math.abs(accuracyPoint - myAbility.evasion) / 100),
    );
  }

  const remainingMyCards = myCards.filter((item) => item.ability.hp >= 0);
  const remainingOppoCards = oppoCards.filter((item) => item.ability.hp >= 0);

  // if (!remainingMyCards.length || !remainingOppoCards.length) {
  //   const winner = remainingMyCards.length
  //     ? remainingMyCards
  //     : remainingOppoCards;
  //   console.log('End this game', winner);
  // } else {
  //   engine([remainingOppoCards, remainingMyCards]);
  // }
  return [remainingOppoCards, remainingMyCards];
};

export default {
  engine,
};

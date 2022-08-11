const strategyData = [
  [[0, 0], [1, 2], [2, 1]],
  [[0, 1], [1, 0], [2, 2]],
];

// eslint-disable-next-line max-len
// const calcPoints = (attacker, defenser) => defenser.hp - (attacker.attack * (attacker.accuracy - defenser.evasion)) / 100;

export const engine = (battleCards) => {
  const [myStrategy, oppoStrategy] = strategyData.flat(0);
  const [oppoCards, myCards] = battleCards;

  console.log(myCards, oppoCards);

  // eslint-disable-next-line no-restricted-syntax
  for (const strategy of myStrategy) {
    const [myPos, oppoPos] = strategy;
    const { ability: oppoAbility } = oppoCards[oppoPos];
    const { ability: myAbility } = myCards[myPos];
    // eslint-disable-next-line max-len
    oppoAbility.hp -= myAbility.attack * Math.abs((myAbility.accuracy - oppoAbility.evasion) / 100);
  }
  // eslint-disable-next-line no-restricted-syntax
  for (const strategy of oppoStrategy) {
    const [oppoPos, myPos] = strategy;
    const { ability: oppoAbility } = oppoCards[oppoPos];
    const { ability: myAbility } = myCards[myPos];
    // eslint-disable-next-line max-len
    myAbility.hp -= oppoAbility.attack * Math.abs((oppoAbility.accuracy - myAbility.evasion) / 100);
  }

  console.log(myCards, oppoCards);
  return [oppoCards, myCards];
};

export default {
  engine,
};

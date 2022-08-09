const strategyData = [
  [[0, 0], [1, 2], [2, 1]],
  [[0, 1], [1, 0], [2, 2]],
];

const calcPoints = (attacker, defenser) => defenser.hp - (attacker.attack * (attacker.accuracy - defenser.evasion)) / 100;

const engine = (battleCards, firstTurn = false) => {
  const attackedMyCards = {};
  const attackedOppoCards = {};
  // const [myStrategy, oppoStrategy] = strategyData.flat(0);
  const strategies = strategyData.flat(0);
  const [oppoCards, myCards] = battleCards;

  const {
    ability: { attack: myAttack, evasion: myEvasion, accuracy: myAccuracy, hp: myHp },
    type: myCardType,
  } = myCards;
  
  const {
    ability: { attack: oppoAttack, evasion: oppoEvasion, accuracy: oppoAccuracy, hp: oppoHp },
    type: oppoCardType,
  } = oppoCards;

  for (const turn of strategies[Number(firstTurn)]) {
    
  }
  console.log(myCardType, oppoCardType);

  return { attackedMyCards, attackedOppoCards };
};

export default {
  engine,
};

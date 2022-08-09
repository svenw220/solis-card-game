const strategyData = [
  [[0, 0], [1, 2], [2, 1]],
  [[0, 1], [1, 0], [2, 2]],
];

const engine = (myCard, oppoCard, firstTurn = false) => {
  const attackedMyCard = {};
  const attackedOppoCard = {};
  const [myStrategy, oppoStrategy] = strategyData.flat(0);

  const {
    ability: { attack: myAttack, evasion: myEvasion, accuracy: myAccuracy, hp: myHp },
    type: myCardType,
  } = myCard;

  const {
    ability: { attack: oppoAttack, evasion: oppoEvasion, accuracy: oppoAccuracy, hp: oppoHp },
    type: oppoCardType,
  } = oppoCard;

  console.log(myCardType, oppoCardType);

  for(const i of myStrategy) {
    for (const j of oppoStrategy) {
      
    }
  }
  
  if (firstTurn) {
    attackedOppoCard.hp = oppoHp - (myAttack * (myAccuracy - oppoEvasion)) / 100;
  } else {
    attackedMyCard.hp = (oppoAttack * (oppoAccuracy - myEvasion)) / 100;
  }  

  return { attackedMyCard, attackedOppoCard };
};

export default {
  engine,
};

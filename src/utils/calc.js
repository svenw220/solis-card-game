const engine = (myCard, oppoCard) => {
  const {
    ability: { myAttack, myDefense, myEvasion, myAccuracy },
    type,
  } = myCard;

  const {
    ability: { oppoAttack, oppoDefense, oppoEvasion, oppoAccuracy },
    type,
  } = oppoCard;

  myCard.hp -= (oppoAttack * (oppoAccuracy - myEvasion)) / 100;
  oppoCard.hp -= (myAttack * (myAccuracy - oppoEvasion)) / 100;

  return { myCard, oppoCard };
};

export default {
  engine,
};

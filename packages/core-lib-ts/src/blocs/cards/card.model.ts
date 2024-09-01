export type CardType = {
  idCard: string;
  nameCard: string;
  supertype: string;
  level: string;
  hp: string;
};

export class Card {
  idCard: string;
  nameCard: string;
  supertype: string;
  level: string;
  hp: string;

  constructor(card: CardType) {
    this.idCard = card.idCard;
    this.nameCard = card.nameCard;
    this.supertype = card.supertype;
    this.level = card.level;
    this.hp = card.hp;
  }
}

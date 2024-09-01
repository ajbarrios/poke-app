import { BaseBloc } from "../base.bloc";
import { Card } from "./card.model";
import { CardsRepository } from "./cards.repository";

export type CardBlocState = {
  cards: Card[];
};

class CardBloc extends BaseBloc<CardBlocState> {
  async getAllCards(): Promise<Card[]> {
    const cardsCache = this.getState()?.cards;
    if (cardsCache) {
      return cardsCache;
    }
    const cardsRepository = new CardsRepository();
    const cards = await cardsRepository.getAllCards();
    this.setState({ cards });
    return cards;
  }

  constructor() {
    super("poke_cards_state");
  }

  static _getInstance(): CardBloc {
    return new CardBloc();
  }
}

export const cardBloc = CardBloc._getInstance();

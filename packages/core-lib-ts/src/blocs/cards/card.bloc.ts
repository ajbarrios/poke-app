import { Cache } from "../../common/decorators/cache";
import { BaseBloc } from "../base.bloc";
import { Card } from "./card.model";
import { CardsRepository } from "./cards.repository";

export type CardBlocState = {
  cards: Card[];
};

class CardBloc extends BaseBloc<CardBlocState> {
  @Cache("poke_cards_cache")
  async getAllCards(): Promise<Card[]> {
    const cardsRepository = new CardsRepository();
    const cards = await cardsRepository.getAllCards();
    this.setState({ cards });
    console.log("He llamado al repositorio");
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

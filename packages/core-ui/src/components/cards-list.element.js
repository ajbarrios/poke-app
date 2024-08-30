import { html, LitElement } from "lit";

export class CardList extends LitElement {
  static get properties() {
    return {
      cards: { type: Array },
    };
  }

  constructor() {
    super();
    this.cards = [];
  }

  render() {
    return html`
      <div>
        ${this.cards &&
        this.cards.map((card) => {
          return html`
            <div>
              <p>Name: ${card.nameCard} - ${card.hp}</p>
            </div>
          `;
        })}
      </div>
    `;
  }

  createRenderRoot() {
    return this;
  }
}

customElements.define("poke-cards-list", CardList);

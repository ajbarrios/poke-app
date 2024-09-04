import { css, html, LitElement } from "lit";

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

  static get styles() {
    return css`
      .cards-container {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        gap: 16px;
        padding: 16px;
      }

      .card {
        border: 1px solid #ccc;
        border-radius: 8px;
        padding: 16px;
        background-color: #fff;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        transition: transform 0.3s ease;
      }

      .card:hover {
        transform: translateY(-5px);
      }

      .card-title {
        font-size: 1.2em;
        font-weight: bold;
        margin-bottom: 8px;
      }

      .card-details {
        font-size: 1em;
      }

      @media (max-width: 600px) {
        .cards-container {
          grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
        }

        .card {
          padding: 12px;
        }
      }
    `;
  }

  render() {
    return html`
      <style>
        ${this.constructor.styles.cssText}
      </style>
      <div class="cards-container">
        ${this.cards &&
        this.cards.map(
          (card) => html`
            <div class="card">
              <div class="card-title">${card.nameCard}</div>
              <div class="card-details">HP: ${card.hp}</div>
              <div class="card-details">Supertype: ${card.supertype}</div>
              <div class="card-details">Level: ${card.level}</div>
            </div>
          `
        )}
      </div>
    `;
  }

  createRenderRoot() {
    return this; // Evita el uso del Shadow DOM
  }
}

customElements.define("poke-cards-list", CardList);

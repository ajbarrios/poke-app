import axios from "axios";
import { describe, expect, it, vi } from "vitest";
import cards200 from "../../../fixtures/cards-200.json";
import config200 from "../../../fixtures/config-200.json";
import { configBloc } from "../config/config.bloc";
import { cardBloc } from "./card.bloc";

vi.mock("axios");

describe("Cards BLoC", () => {
  it("should get all cards", async () => {
    vi.mocked(axios, true).get.mockResolvedValueOnce(config200);
    await configBloc.loadConfig();

    vi.mocked(axios, true).get.mockResolvedValueOnce(cards200);
    const cards = await cardBloc.getAllCards();

    const firstCard = cards[0];
    expect(firstCard.idCard).toEqual("dp3-1");
    expect(firstCard.nameCard).toEqual("Ampharos");
    expect(firstCard.supertype).toEqual("Pokémon");
    expect(firstCard.level).toEqual("52");
    expect(firstCard.hp).toEqual("130");
  });
});

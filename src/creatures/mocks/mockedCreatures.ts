import type Creature from "../types";

export const mockKtulu: Creature = {
  _id: "1",
  name: "Ktulu",
  lineage: "",
  imageUrl: "",
  description: "",
  author: "Howie",
  augury: true,
  alternativeText: "",
};

export const mockDigon: Creature = {
  _id: "2",
  name: "Digon",
  lineage: "",
  imageUrl: "",
  description: "",
  author: "Howie",
  augury: false,
  alternativeText: "",
};

export const mockCreatures: Creature[] = [mockKtulu, mockDigon];

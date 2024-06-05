import Creature from "./types";

interface CreaturesClientStructure {
  getCreatures(): Promise<Creature[]>;
}

export default CreaturesClientStructure;

import CreaturesClientStructure from "./CreaturesClientStructure.js";
import Creature from "../types";
import routes from "../routes/routes.js";

class CreatureClient implements CreaturesClientStructure {
  async getCreatures(): Promise<Creature[]> {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}${routes.creatures}`,
      );

      if (!response.ok) {
        throw new Error(`Request failed with code ${response.status}`);
      }

      return (await response.json()) as Creature[];
    } catch (error) {
      throw new Error("Failed to get creatures");
    }
  }
}

export default CreatureClient;

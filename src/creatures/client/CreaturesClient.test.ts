import { mockCreatures } from "../mocks/mockedCreatures";
import CreaturesClient from "./CreaturesClient.js";

describe("Given the CreaturesClient's getCreatures method", () => {
  describe("When its called", () => {
    const client = new CreaturesClient();

    test("Then it should return a list of creatures containing Ktulu", async () => {
      const expectedCreatures = [...mockCreatures];

      const creatures = await client.getCreatures();

      expect(creatures).toStrictEqual(expectedCreatures);
    });
  });
});

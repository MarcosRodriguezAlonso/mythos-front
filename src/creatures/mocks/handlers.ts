import { mockCreatures } from "./mockedCreatures.js";
import { http, HttpResponse } from "msw";
import routes from "../routes/routes.js";
import Creature from "../types.js";

const handlers = [
  http.get(`${import.meta.env.VITE_API_URL}${routes.creatures}`, () => {
    return HttpResponse.json<Creature[]>(mockCreatures);
  }),
];

export default handlers;

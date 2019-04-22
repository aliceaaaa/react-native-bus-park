import { BusModel } from "./BusModel";

export class BusModelBuilder {
  public static build = (
    brand: string,
    model: string,
    releaseYear: string,
    velocity: string
  ): BusModel => ({
    brand,
    model,
    releaseYear,
    velocity
  });
}

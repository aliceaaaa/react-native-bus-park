import { createAction } from "typesafe-actions";

export const onBusBrandAdded = createAction(
  "bus/ON_BUS_BRAND_ADD_WANTED",
  resolve => (brand: string) => resolve(brand)
);

export const onBusModelAdded = createAction(
  "bus/ON_BUS_MODEL_ADDED",
  resolve => (model: string) => resolve(model)
);

export const onBusReleaseYearAdded = createAction(
  "bus/ON_BUS_RELEASE_YEAR_ADDED",
  resolve => (releaseYear: string) => resolve(releaseYear)
);

export const onBusVelocityAdded = createAction(
  "bus/ON_BUS_VELOCITY_ADDED",
  resolve => (velocity: string) => resolve(velocity)
);

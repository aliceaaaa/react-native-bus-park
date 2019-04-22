import { createAction } from "typesafe-actions";

export const onDriverNameAdded = createAction(
  "driver/ON_DRIVER_NAME_ADDED",
  resolve => (name: string) => resolve(name)
);

export const onDriverDateOfBirthAdded = createAction(
  "driver/ON_DRIVER_DATE_OF_BIRTH_ADDED",
  resolve => (dateOfBirth?: string) => resolve(dateOfBirth)
);

import { DriverModel } from "./DriverModel";
import { IApplicationState } from "../redux/IApplicationState";

export class DriverModelBuilder {
  public static build = (name: string, birthDate: string): DriverModel => ({
    name,
    birthDate
  });
}

import { googleApiKey } from "../KeyStorage/GoogleApiKey";
import axios from "axios";

export class DistanceService {
  public static async get(
    departureCity: string,
    destinationCity: string
  ): Promise<any> {
    let url =
      "https://maps.googleapis.com/maps/api/distancematrix/json?origins=" +
      departureCity +
      "&destinations=" +
      destinationCity +
      "&key=" +
      googleApiKey;

    let res = await axios.get(url);
    let distance = await res.data.rows.elements.distance.value;

    return distance;
  }
}

import AsyncStorage from "@react-native-community/async-storage";
import { Keys } from "./Keys";

export class Storage {
  public static async setKeyAsync(apiKey: string): Promise<void> {
    return AsyncStorage.setItem(Keys.apiKey, apiKey);
  }

  public static async getKeyAsync(): Promise<string | undefined> {
    const result = await AsyncStorage.getItem(Keys.apiKey);

    return result === null ? null : result;
  }

  public static async clearKeyAsync() {
    await AsyncStorage.removeItem(Keys.apiKey);
  }
}

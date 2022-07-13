import data from "../assets/data.json";
import { ILoco } from "../types/locoTypes";

export class DataService {
  static getData() {
    return data as ILoco[];
  }
}

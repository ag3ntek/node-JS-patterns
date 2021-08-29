import { Config } from "./Config.js";

export class JsonTemplate extends Config {
    _deserialize(data) {
        return JSON.parse(data);
      }
  
    _serialize(data) {
        return JSON.stringify(data, null);
    }
}
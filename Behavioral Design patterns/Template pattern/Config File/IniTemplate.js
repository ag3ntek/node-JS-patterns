import { Config } from "./Config.js";
import ini from 'ini';

export class IniTemplate extends Config {
    _deserialize(data) {
      return ini.parse(data);
    }

    _serialize(data) {
        return ini.stringify(data);
    }
}
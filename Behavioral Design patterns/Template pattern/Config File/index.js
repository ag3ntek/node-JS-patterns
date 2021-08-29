import { IniTemplate } from "./IniTemplate.js";
import { JsonTemplate } from "./JsonTemplate.js";

const initConfig = new IniTemplate();
const jsonConfig = new JsonTemplate();

await jsonConfig.load('samples/jsonArchive.json');
jsonConfig.set('books', 'nodejsPatterns');
await jsonConfig.save('samples/jsonArchive_mod.json');

await initConfig.load('samples/iniArchive.ini');
initConfig.set('books', 'nodejsPatterns');
await initConfig.save('samples/iniArchive_mod.ini');

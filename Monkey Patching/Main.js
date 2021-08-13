require('./Patcher');
const logger = require('./Logger');

logger.functionToExport();
logger.addMonkeyPatching(); // Es una técnica muy peligrosa ya que se pueden modificar global scope y otros objetos de otros módulos

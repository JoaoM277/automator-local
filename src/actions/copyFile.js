const fs = require("fs/promises");
const { logger } = require("../core/logger");

async function copyFile({ homeFolder, destFolder, ext }) {
  try {
    await fs.copyFile(homeFolder, destFolder);
    console.log("Arquivo copiado com sucesso");
    const STATUS = "SUCESS";
    const ACTION = "copy";
    logger(destFolder, STATUS, ACTION);
  } catch (error) {
    console.error(error);
    const STATUS = "FAILED";
    const ACTION = "copy";
    logger(homeFolder, STATUS, ACTION);
  }
}

module.exports = { copyFile };

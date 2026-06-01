const fs = require("fs/promises");
const { logger } = require("../core/logger");

async function copyFile({ homeFolder, destFolder, ext }) {
  try {
    await fs.copyFile(homeFolder, destFolder);
    console.log("Arquivo copiado com sucesso");
  } catch (error) {
    console.error(error);
    console.log("Rodou esse erro");
  }
}

module.exports = { copyFile };

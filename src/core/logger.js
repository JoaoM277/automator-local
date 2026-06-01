const fs = require("fs/promises");

const folderLog = "./logs/arquivo-de-logs.txt";

async function logger(destFolder, STATUS, ACTION) {
  try {
    const FILE = destFolder;
    const dataString = new Date();
    const time = dataString.toLocaleTimeString("pt-br");
    const dataForm = dataString.toLocaleDateString("pt-br");
      const logObject = `[${dataForm} ${time}]
     ACTION=${ACTION}
     FILE=${FILE}
     STATUS=${STATUS}\n`;
      await fs.appendFile(folderLog, logObject, { flag: "a" });
      console.log("Conteudo inserido com sucesso");
    
  } catch (error) {
    console.error(error);
    console.log("Rodou esse erro")
  }
}

module.exports = { logger };


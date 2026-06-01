const path = require("path");
const fs = require("fs/promises");

async function moveFile({ homeFolder, destFolder, eventType, ext }) {
  if (eventType !== "rename") return;
  try {
    await fs.access(homeFolder);
  } catch (error) {
    console.log("Arquivo não encontrado");
  }

  try {
    await fs.rename(homeFolder, destFolder, { overwrite: true });
    console.log(
      "Arquivo " +
        ext +
        " movido com sucesso de " +
        homeFolder +
        " para " +
        destFolder,
    );
  } catch (err) {
    console.log("Falha ao mover o arquivo", err);
  }
}

module.exports = { moveFile };

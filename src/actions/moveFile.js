const path = require("path");
const fs = require("fs");

async function moveFile({homeFolder, destFolder, eventType, ext}) {
  if (eventType !== "rename") return;
  if (ext !== ".txt") return;
  if (!fs.existsSync(homeFolder)) {
    console.log("Arquivo não encontrado", homeFolder);
    return;
  }

  fs.rename(homeFolder, destFolder, (err) => {
    if (err) {
      console.log(err);
      return;
    }

    console.log(
      "Arquivo " +
        ext +
        " movido com sucesso de " +
        homeFolder +
        " para " +
        destFolder,
    );
  });
}

module.exports = { moveFile };

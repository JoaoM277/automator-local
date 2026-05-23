const path = require("path");
const fs = require("fs");


function moveFile(homeFolder, destFolder, eventType, filename) {
  const file = path.extname(filename).toLowerCase();
  if (eventType === "rename" && file === ".txt") {
    fs.rename(homeFolder, destFolder, (err) => {
      if (err) {
        console.log(err);
        return;
      }

      console.log(
        "Arquivo " +
          file +
          " movido com sucesso de " +
          homeFolder +
          " para " +
          destFolder,
      );
    });
  }
}

module.exports = { moveFile };

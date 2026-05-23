const path = require("path");
const fs = require("fs");
const { watchingFolder } = require("./triggers/watchFolder");
const { moveFile } = require("./actions/moveFile");

const Folder = "./watch";

console.log("Automator Inciado");
console.log("Monitorando: " + Folder);
watchingFolder(Folder, ({ eventType, filename, folder }) => {
  const nullFolder = fs.readdirSync(Folder);
  while (nullFolder.length != 0)
    if (eventType) {
      console.log("Novo evento: " + eventType);
      const dirFile = path.join(Folder, filename);
      const destFolder = path.join("./logs", path.basename(dirFile));
      moveFile(dirFile, destFolder, eventType, filename);
      break;
    } else if (nullFolder.length === 0) {
      console.log("Não Ha arquivos a serem movidos");
      break;
    }
});

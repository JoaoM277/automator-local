const path = require("path");
const { watchingFolder } = require("./triggers/watchFolder");
const { Rule } = require("./core/rules");

const { retryHandler } = require("./core/retryHandler");
const fs = require("fs");

const Folder = "./watch";

console.log("Automator Inciado");
console.log("Monitorando: " + Folder);
watchingFolder(Folder, ({ eventType, filename }) => {
  const ext = path.extname(filename).toLowerCase();
  const theRule = Rule.find((p) => p.extension.toLowerCase() === ext);
  const destinit = theRule.destination;
  console.log("Novo evento: " + eventType);
  const dirFile = path.join(Folder, filename);
  const destFolder = path.join(destinit, path.basename(dirFile));
  console.log(theRule)

  const context = {
    homeFolder: dirFile,
    destFolder: destFolder,
    eventType: eventType,
    ext: ext,
    filename: filename,
  };

  retryHandler(context,theRule);
});

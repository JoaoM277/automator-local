const path = require("path");
const { watchingFolder } = require("./triggers/watchFolder");
const { context , Rule } = require("./core/rules");
const { actionChange } = require("./actions/actionRegister");


const Folder = "./watch";

console.log("Automator Inciado");
console.log("Monitorando: " + Folder);
watchingFolder(Folder, ({ eventType, filename, folder }) => {
  const ext = path.extname(filename).toLowerCase();
  const theRule = Rule.find((p) => p.extension.toLowerCase() === ext);
  const destinit = Rule.destination;
  console.log("Novo evento: " + eventType);
  const dirFile = path.join(Folder, filename);
  const destFolder = path.join(destinit, path.basename(dirFile));
  const handler = actionChange(theRule);
  handler(context);
});

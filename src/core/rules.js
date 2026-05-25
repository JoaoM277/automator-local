const { moveFile } = require("../actions/moveFile");

const Rule = [
  {
    extension: ".txt",
    action: "move",
    destination: ".logs",
  },
  {
    extension: ".pdf",
    action: "move",
    destination: ".logs",
  },
];

const Dicionary = [
  {
    action: "move",
    function: moveFile,
  },
];

const context = {
  homeFolder: "dirfile",
  destFolder: "destFolder",
  eventType: "",
  ext: "",
};

module.exports = { context, Rule, Dicionary };

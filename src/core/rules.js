const { moveFile } = require("../actions/moveFile");
const { copyFile } = require("../actions/copyFile");
const { logger } = require("./logger");

const Rule = [
  {
    extension: ".txt",
    action: ["copy", "move"],
    destination: "logs",
  },
  {
    extension: ".csv",
    action: ["copy"],
    destination: "logs",
  },
];

const Dicionary = [
  {
    action: "copy",
    function: copyFile,
  },
  {
    action: "move",
    function: moveFile,
  },
];

module.exports = { Rule, Dicionary };

const fs = require("fs");


async function watchingFolder(pasta, onEvent) {
  fs.watch(pasta, (eventType, filename) => {
    if (filename) {
      onEvent({ eventType, filename, folder: pasta });
    }
  });
}

module.exports = { watchingFolder };

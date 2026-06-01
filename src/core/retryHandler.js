const { actionChange } = require("./actionRegister");
const fs = require("fs");
const { logger } = require("./logger");

let i = 4;

async function retryHandler(context, theRule) {
  console.log("Função iniciada");
  while (i >= 1) {
    theRule.action.forEach((oneAction)=>{
    try {
      if (!fs.existsSync(context.homeFolder)) {
        console.log("Pasta não encontrada");
        const STATUS = "failed";
      }
      console.log("Passamos aqui na função");
      const handlers = actionChange(theRule);
      for (const handler of handlers) {
        handler(context);
        console.log("Passou por aqui, 1");
        const STATUS = "sucess";
        console.log(context.destFolder)
        logger(context.destFolder, STATUS, oneAction);
        i--;
        break;
      }
    } catch (error) {
      console.error(error);
      const STATUS = "failed";
      logger(context.destFolder, STATUS, ACTION);
      i--;
    }
    })
  }
}

module.exports = { retryHandler };

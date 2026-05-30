const { actionChange } = require("./actionRegister");
const fs = require("fs");

let i = 4;

async function retryHandler(context, theRule) {
  console.log("Função iniciada");
  while (i >= 1) {
    try {
      if (!fs.existsSync(context.homeFolder)) {
        console.log("Passou por aqui, 3");
        throw new Error("Pasta não existe");
      }
      console.log("Passamos aqui na função");
      const handlers = actionChange(theRule);
      for (const handler of handlers) {
        await handler(context);
        i--;
        console.log("Passou por aqui, 1");
      }

      console.log("Passou por aqui, 2");
      i--;

      const STATUS = "sucess";
      break;
    } catch (error) {
      const STATUS = "failed";
      console.error(error);
      i--;
    }
  }
}

module.exports = { retryHandler };

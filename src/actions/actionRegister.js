const { Dicionary } = require("./core/rules");



function actionChange(Rule) {
  const theAction = Dicionary.find((p) => p.action === Rule.action);
  if (!theAction){
    throw new Error(`Action não encontrada`)
  }

  return theAction.function;
}

module.exports = { actionChange };

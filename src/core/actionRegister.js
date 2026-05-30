const { Dicionary } = require("./rules");

function actionChange(Rule) {
  const sourcedAction = Rule.action.map((nameAction) => {
    const actionObj = Dicionary.find((p) => p.action === nameAction);

    if (!actionObj) {
      throw new Error(`Action não encontrada`);
    }

    return actionObj.function;
  });

  return sourcedAction;
}

module.exports = { actionChange };

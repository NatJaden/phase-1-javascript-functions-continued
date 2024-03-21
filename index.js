function saturdayFun(activity = "roller-skate" || "bathe my dog") {
  return `This Saturday, I want to ${activity}!`;
}

function mondayWork(activity = "go to the office" || "I will work from home") {
  return `This Monday, I will ${activity}.`;
}

function wrapAdjective(result = "*") {
  return function (emphatic = "a hard worker") {
    return `You are ${result}${emphatic}${result}!`;
  };
}
function wrapAdjective(result = "||") {
  return function (emphatic = "a hard worker") {
    return `You are ${result}${emphatic}${result}!`;
  };
}

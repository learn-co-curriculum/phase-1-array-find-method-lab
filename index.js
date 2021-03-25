function superbowlWin(record) {
  const result = record.find(isWin)
  if(Boolean(result) === true) {
    return result.year
  }
}

function isWin(gameObj) {
  return gameObj.result === "W"
}
function superbowlWin (record) {
let result = record.find(obj => obj.result === "W");
if (result) {
    return result.year;
} else {
    return undefined;
}
}

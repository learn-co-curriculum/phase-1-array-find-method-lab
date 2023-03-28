// code your solution here


function superbowlWin(array)
{
    const result = array.find(obj => obj.result === "W");
    return result ? result.year : undefined;
}

const record = []

    function superbowlWin(record){
    const win = record.find(record => record.result === "W");
        if (win)
    {
       return win.year;
}
    }

function superbowlWin(record) {
    const found = record.find( item => item.result === 'W')

    if (found !== undefined) {
    return found.year
    } else {
        return undefined
    }
}
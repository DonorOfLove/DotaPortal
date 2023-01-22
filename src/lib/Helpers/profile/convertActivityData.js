import moment from "moment";
import getUnixTime from "../common/getUnixTime";
import isWin from "../match/isWin";
import * as _ from "lodash";
import getWinRate from "../common/getWinRate";

function getLevel(day) {
    let games = day.length
    let wins = 0
    for (let match of day) {
        wins = wins + Number(match.isWin)
    }
    let wr = Math.floor(getWinRate(wins, games) / 25)
    if (wr === 0) {
        wr = 1
    }
    return wr
}

export default function convertActivityData(matches) {
    let arr = []
    for (let match of matches) {
        const matchData = {
            date: moment(getUnixTime(match.start_time)).format("YYYY-MM-DD"),
            isWin: isWin(match)
        }
        arr.push(matchData)
    }
    arr = _.groupBy(arr, 'date')
    let set = []
    for (let key in arr) {
        set.push({date: key, count: arr[key].length, level: getLevel(arr[key])})
    }
    let data = _.groupBy(set, (match) => match.date.slice(0, 4))
    for (let year in data) {
        if (data[year][0].date !== `${year}-01-01`) {
            data[year].unshift({date: `${year}-01-01`, count: 0, level: 0})
            console.log(data)
        }
        if (data[year][0].date !== `${year}-12-31`) {
            data[year].push({date: `${year}-12-31`, count: 0, level: 0})
        }
    }
    return data
}



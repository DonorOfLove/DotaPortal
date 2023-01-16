import * as _ from "lodash"

export let isSorted = true

export default function (obj, key) {
    let copy = JSON.parse(JSON.stringify(obj));
    if (isSorted) {
        isSorted = false
        return _.orderBy(copy, key, isSorted?'asc':'desc')
    } else {
        isSorted = true
        return _.orderBy(copy, key, isSorted?'asc':'desc')
    }
}



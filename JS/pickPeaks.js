function pickPeaks(arr){

    let peaks = []
    let pos = []

    let curValue = arr[0]
    let curIndex = 0
    
    let newExt = false

    arr.forEach((el, i) => {

        if ((el < curValue) && (newExt)) {
            peaks.push(curValue)
            pos.push(curIndex)
            curValue = el
            curIndex = i
            newExt = false

        } else if (el < curValue) {
            curValue = el
            curIndex = i

        }
        if (el > curValue) {
            curValue = el
            curIndex = i
            newExt = true
        }
    })

    return {pos, peaks}
}

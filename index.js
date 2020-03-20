// Your code here
function mapToNegativize(sourceArray) {
    let i = 0
    let array = []
    while (i < sourceArray.length) {
        array.push(sourceArray[i] * -1)
        i++
    }
    return array
}

function mapToNoChange(sourceArray) {
    return sourceArray
}

function mapToDouble(sourceArray) {
    let i = 0
    let array = []
    while (i < sourceArray.length) {
        array.push(sourceArray[i]*2)
        i++
    }
    return array
}

function mapToSquare(sourceArray) {
    let i = 0
    let array = []
    while (i < sourceArray.length) {
        array.push(sourceArray[i]**2)
        i++
    }
    return array
}

function reduceToTotal(sourceArray, startingPoint) {
    let i = 0
    let sum = 0

    if (startingPoint) {
        sum = startingPoint
    } else {
        sum = 0
    }

    while (i < sourceArray.length) {
        sum += sourceArray[i]
        i++
    }
    return sum
}

function reduceToAllTrue(sourceArray) {
    let i = 0
    while (i < sourceArray.length) {
        if (!sourceArray[i]) {
            return false
        }
        i++
    }
    return true
}

function reduceToAnyTrue(sourceArray) {
    for (let i=0; i < sourceArray.length; i++) {
        if (sourceArray[i]) {
            return true
        }
    }
    return false
}

if (NaN) {
    console.log("true")
} else {
    console.log("false")
}

console.log(reduceToTotal([1,2,3]))

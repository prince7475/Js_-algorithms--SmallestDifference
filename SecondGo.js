function smallestDifference (array1, array2){
    array1.sort((a,b)=> a - b)
    array2.sort((a,b)=> a - b)
    let point1 = 0;
    let point2 = 0;
    let result = []
    let smallestDiff = Infinity
    while (point1 < array1.length && point2 < array2.length){
        let num1 = array1[point1]
        let num2 = array2[point2]
        if(num1 > num2){
            let diff = num1 - num2
                if (diff < smallestDiff){
                    smallestDiff = diff
                    result = [num1,num2]
                }
            point2++
        }else if (num2 > num1){
            let diff = num2 - num1 
                if (diff < smallestDiff){
                    smallestDiff = diff
                    result = [num1,num2]
                }
            point1++
        }else {
            return [num1,num2]
        }
    }
    return result
}



exports.smallestDifference = smallestDifference
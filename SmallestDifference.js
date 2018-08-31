function smallestDifference (array1,array2) {
    // sort both arrays 
    array1.sort((a,b)=> a - b)
    array2.sort((a,b)=> a - b)
    let p1 = 0;
    let p2 = 0;
    let result = []
    let currentSmallest = Infinity
    while(p1 < array1.length && p2 < array2.length){
        let num1 = array1[p1]
        let num2 = array2[p2]
        if(num1 === num2){
            return [num1,num2]
        }else if (num2 > num1){
            let diff = num2 - num1
            if(diff < currentSmallest){
                currentSmallest = diff
                result = [num1,num2]
            }
            p1++;
        }else if (num1 > num2){
            let diff = num1 - num2
            if(diff < currentSmallest){
                currentSmallest = diff
                result = [num1, num2]
            }
            p2++
        }
    }
    return result
}

exports.smallestDifference = smallestDifference
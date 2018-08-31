function smallestDifference (array1,array2) {
    // sort both arrays 
    array1.sort((a,b)=> a - b)
    array2.sort((a,b)=> a - b)
    //we will have two pointers, one for array1 and one for array two
    let p1 = 0; // for array1
    let p2 = 0; // for array2
    let result = [] // result will hold our current two nums with the smallest difference
    let currentSmallest = Infinity // Made our currentSmallest number 
    while(p1 < array1.length && p2 < array2.length){ // we will loop through both of the array
        let num1 = array1[p1] // getting current element in array1
        let num2 = array2[p2] // getting current element in array2
        if(num1 === num2){
            return [num1,num2] // if both of the numbers are the same we will return it right away because the is the smallest diffrence, 0
        }else if (num2 > num1){ // if num2 is bigger the number one will let get the differenc and see if the difference is smaller the our 'currentSmallest', if so we will change the value of it and make our result num1 and num2. since num1 is smaller we will want to go to the right of array1 to get a higer number, where there will be more chance of getting a smaller difference.
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
    return result // we will always have a result
}

exports.smallestDifference = smallestDifference
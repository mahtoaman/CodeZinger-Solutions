let arr = [2,3,5,7,9]

function primeArr(arr){
    let result = []
    for(let i=0;i<arr.length;i++){
        let element = arr[i]
        let temp = false
        
        if(arr[i]==1){
            return false
        }
        for(let j =2;j<element;j++){
            if(element%j==0){
                temp = true
            }
        }
        if(!temp){
            result.push(element)
        }
    }
    return result
}

console.log(primeArr(arr))

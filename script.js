	function secondHighest(arr) {
			//Write your code here
			let highest = -Infinity
       for(let t of arr){
            if(t > highest) {
            highest = t 
       }
       }
      
       let secondHighest = -Infinity;
       for(let i=0; i<arr.length; i++) {
           if(arr[i] < highest && arr[i] > secondHighest ) {
               secondHighest = arr[i]
           }
       }

       if(arr.length<=1){
           return -Infinity
       }
       
      }
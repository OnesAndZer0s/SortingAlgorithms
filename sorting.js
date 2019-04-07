function selection(arr,boolean){
var i=0, j, min_idx,n = arr.length; 
var x = array.map(function(cur,ind,arr){return (arr[ind+1]!==undefined)?arr[i]<arr[ind+1]:true})
while ([...new Set(x)].length==1){i++; 
x = array.map(function(cur,ind,arr){return (arr[ind+1]!==undefined)?arr[i]<arr[ind+1]:true})
for (var a = 0; a < i; a++) {x.shift();}
}
        min_idx = i; 
        for (j = i+1; j < n; j++) 
          if (arr[j] < arr[min_idx]) 
            min_idx = j; 
  
        swap(arr,min_idx,i); 

return arr
}

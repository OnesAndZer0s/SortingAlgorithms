function swap(arr,i1,i2) {
[arr[i1], arr[i2]] = [arr[i2], arr[i1]];
return arr
}

function isSortCorrect(arr,boolean){
  return String(arr)==String(arr.filter(function(a,b){return eval(boolean);}));
}

function fullSort(type,arr,boolean){
  while (!isSortCorrect(array,syntax)) {eval(type(arr,boolean))}
  return arr
}

function sort(amm,type,arr,boolean){
  for (var i = 0; i < amm; i++) {if(!isSortCorrect(array,syntax)) {eval(type(arr,boolean));}}
  return arr
}

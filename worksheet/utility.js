function add(a,b) {
  return a+b;
}
module.exports.add = add;

function compare(a1,a2) {
  var identical = true;
  if (a1.length === a2.length) {
    for (var i=0; i<a1.length; i++) {
      if (a1[i] != a2[i]){
        identical = false;
      }
    }
  }
  else {
    identical = false;
  }

  return identical;
}
module.exports.compare = compare;

function largest(arr) {
  var max = 0;
  for (var i=0; i<arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
module.exports.largest = largest;

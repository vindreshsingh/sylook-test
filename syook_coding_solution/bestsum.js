function chooseBestSum(t, k, ls) {
    // initial biggest_count_distance is zero
     var biggest_count_distance = 0;
    
     var townsCalling = function(townsSoFar, lastIndex) {
     townsSoFar = townsSoFar || [];
     //base case
     if (townsSoFar.length === k) {
        var sumDistance = townsSoFar.reduce((a,b)=>a+b);
           if (sumDistance <= t && sumDistance > biggestCount) {
              biggest_count_distance = sumDistance;
           }
        return; //EJECT
     }
  //recursive case
     for (var i = lastIndex + 1 || 0; i < ls.length; i++) {
        townsCalling(townsSoFar.concat(ls[i]), i);
     }
  }
  townsCalling();
  return biggest_count_distance || null;
  }
  var ls=[91, 74, 73, 85, 73, 81, 87];
  var t=230;
  var k=3;
  console.log(chooseBestSum(t,k,ls));
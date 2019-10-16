var findMissing = function (list) {
  var result,i=0,fin,arr=list;
  arr.sort((a,b)=>a-b);
  /*for (var i=0 in arr){
      console.log(arr[i]);
    }*/
  //console.log('-----------');
  var aux0 = Math.abs(arr [1]-arr [0]);
  var aux1 = Math.abs(arr [2]-arr [1]);
  if(aux0>aux1){
    result = aux1;
  }
  else{
    result = aux0;
  }
  i=0;
  while(i<arr.length){
    fin = result + arr[i];
    //console.log('fin!: '+fin);
    if(arr[i+1]!=fin){
      return fin;
    }
    i++;
  }
  
  /********TDD CODE*******************
  
  fixture.random(10,0);
fixture.random(10,10);
fixture.random(10,100);
fixture.random(10,1000);
Test.describe("Testing with [1, 3, 4]", function() {
  Test.assertEquals(findMissing([1, 3, 4]), 2);
});

**************************************/

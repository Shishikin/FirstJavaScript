var array =[0, 1, 2, 3, 4];
var arrayNew =[];
arrayNew.push(5);
arrayNew.push(6);
arrayNew.push(6);
arrayNew = arrayNew.concat(array);
arrayNew.push(array);

for(a of arrayNew)
  {
    alert(a);
  }

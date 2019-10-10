var myObj = {
    "one": 1,
    "Two": 2,
    "Three": 3
  }
  
  var keys = Object.keys(myObj);
  
  var timestwo = keys.map(function (key){
    return myObj[keys] *2 ;
  });
  
  console.log(timestwo);
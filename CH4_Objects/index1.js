function addPebbles(bottle) {
    while (bottle.pebbles < 10) {
      bottle.pebbles = bottle.pebbles + 1;
    }
  }
  let bottle = { pebbles: 5 };
  addPebbles(bottle);
  console.log(bottle);
  
  function doIt(param) {
    param++;
    console.log("param " + param);
  }
  
  let test = 1;
  doIt(test);
  console.log("test " + test);
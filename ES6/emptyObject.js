let canEat = {
    eat: function () {
      console.log("eating");
    },
  };
  let canFly = {
    fly: function () {
      console.log("flying");
    },
  };
  let canWalk = {
    walk: function () {
      console.log("walking");
    },
  };
  let canSwim = {
    swim: function () {
      console.log("swimming");
    },
  };
  
  function createObj(...sources) {
    console.log(sources);
    return Object.assign({}, ...sources);
  }
  
  let person = createObj(canEat, canSwim, canWalk);
  console.log(person);
  
  let goose = createObj(canEat, canFly,canSwim,canWalk);
  console.log(goose);
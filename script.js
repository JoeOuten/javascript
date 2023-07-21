// <----pizzaOven----> //
function pizzaOven(crustType, sauceType, cheeses, toppings) {
    let pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
  }
//   <----Create a pizza with: "deep dish", "traditional", ["mozzarella"], and ["pepperoni", "sausage"]----> //
  let p1 = pizzaOven(
    "deep dish",
    "traditional",
    ["mozzarella"],
    ["pepperoni", "sausage"]
  );
//   <----Create a pizza with: "hand tossed", "marinara", ["mozzarella", "feta"], and ["mushrooms", "olives", "onions"]----> //
  console.log(p1);
  let p2 = pizzaOven(
    "hand tossed",
    "marinara",
    ["mozzarella", "feta"],
    ["mushrooms", "olives", "onions"]
  );
  console.log(p2);
  let p3 = pizzaOven(
    "greekStyle",
    "classic",
    "Gouda",
    ["pepperoni", "extra cheese"]
  );
//   <----Create 2 more pizzas with any toppings we like!----> //
  console.log(p3);
  let p4 = pizzaOven("stuffedCrust", "buffalo", "provolone", [
    "Bbq",
    "Sausage",
    "fresh garlic",
  ]);
  console.log(p4);
  
//   <----Bonus Challenge: Create a function called randomPizza that uses Math.random() to create a random pizza!----> //
  let crustTypes = [
    "stuffedCrust",
    "handTossed",
    "hand tossed",
    "greekStyle",
  ];
  
  let sauceTypes = [
    "classic",
    "garlicHerb",
    "buffalo",
    "artichoke",
  ];
  
  let cheeses = [
    "gouda",
    "provolone",
    "cheddar",
    "parmesan",
    "mozzarella",
    
  ];
  
  let toppings = [
    "pepperoni",
    "supreme",
    "extra cheese",
    "Bbq",
    "sausage",
    "capticciosa",
    "olives",

  ];
  function getRandomArrayIndex(array) {
    return Math.floor(Math.random() * array.length);
  }
  
  function randomPizza() {
    let sauceType = sauceTypes[getRandomArrayIndex(sauceTypes)];
    let crustType = crustTypes[getRandomArrayIndex(crustTypes)];
    let topping = toppings[getRandomArrayIndex(toppings)];
    let cheese = cheeses[getRandomArrayIndex(cheeses)];
    
    console.log(
      "Random pizza generated - ",
      pizzaOven(sauceType, crustType, topping, cheese,)
    );
  }
  
  randomPizza();
let stocks = {
  Fruits: ["strawberry", "grapes", "banana", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
};

let order = (fruitName, callProduction) => {
  setTimeout(() => {
    console.log(`Order placed: ${stocks.Fruits[fruitName]}`);
    callProduction();
  });
};
let production = () => {
  console.log("Order recieved, starting production");

  setTimeout(() => {
    console.log("Food has been chopped");
  }, 2000);
};

order(0, production);

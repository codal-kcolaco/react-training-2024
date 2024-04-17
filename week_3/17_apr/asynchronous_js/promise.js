let stocks = {
  Fruits: ["strawberry", "grapes", "banana", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
};

let isShopOpen = true;

let order = (time, work) => {
  return new Promise((resolve, reject) => {
    if (isShopOpen) {
      setTimeout(() => {
        resolve(work());
      }, time);
    } else {
      reject(console.log("Shop is closed"));
    }
  });
};

order(2000, () => console.log(`${stocks.Fruits[0]} was selected`))
  .then(() => {
    return order(0, () => console.log("Production has started"));
  })
  .then(() => {
    return order(2000, () => console.log("The fruit has chopped"));
  })
  .then(() => {
    return order(1000, () =>
      console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]}`)
    );
  })
  .then(() => {
    return order(1000, () => console.log("start the container"));
  })
  .then(() => {
    return order(2000, () =>
      console.log(`icecream was placed on ${stocks.holder[0]}`)
    );
  })
  .then(() => {
    return order(3000, () => console.log(`${stocks.toppings[0]}`));
  })
  .then(() => {
    return order(1000, () => console.log(`ice cream was served`));
  })
  .catch(() => console.log("Customer left"))
  .finally(() => console.log("Day end, shop is closed"));

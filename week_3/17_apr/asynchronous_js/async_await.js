let stocks = {
  Fruits: ["strawberry", "grapes", "banana", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
};

let isShopOpen = true;

function time(ms) {
  return new Promise((resolve, reject) => {
    if (isShopOpen) {
      setTimeout(resolve, ms);
    } else {
      reject(console.log("Shop is closed"));
    }
  });
}

async function kitchen() {
  try {
    await time(2000);
    console.log(`${stocks.Fruits[0]}`);
    console.log("Production has started");

    await time(2000);
    console.log("The fruit has chopped");

    await time(1000);
    console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]}`);

    await time(1000);
    console.log("start the container");

    await time(2000);
    console.log(`icecream was placed on ${stocks.holder[0]}`);

    await time(3000);
    console.log(`${stocks.toppings[0]}`);

    await time(1000);
    console.log(`ice cream was served`);
  } catch (error) {
    console.log("Customer left", error);
  } finally {
    console.log("Day ended");
  }
}

kitchen();

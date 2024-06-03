import sql from "better-sqlite3";

const db = sql("meals.db");

const getMeals = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000)); // this code is added to practice loading state
  throw new Error("test"); // to see if error.jsx works
  return db.prepare("SELECT * FROM meals").all();
};

export default getMeals;

function List() {
  const fruits = [
    { id: 1, name: "apple", calories: 95 },
    { id: 2, name: "orange", calories: 45 },
    { id: 3, name: "banana", calories: 48 },
  ];

  fruits.sort((a, b) => b.name.localeCompare(a.name)); // reverse alphabetical

  const listItems = fruits.map((fruit) => (
    <li key={fruit.name}>
      {fruit.name}: {fruit.calories}
    </li>
  ));
  return <ul>{listItems}</ul>;
}

export default List;

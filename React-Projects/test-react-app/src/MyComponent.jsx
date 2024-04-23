import React, { useState } from "react";

export default function MyComponent() {
  const [name, setName] = useState("N/A");
  const [age, setAge] = useState(0);
  const [comment, setComment] = useState("");
  const [payment, setPayment] = useState("");
  const [shipping, setShipping] = useState("Delivery");

  function handleNameChange(event) {
    setName(event.target.value);
  }

  const updateName = () => {
    setName("Kevin");
  };

  const incrementAge = () => {
    setAge(age + 1);
  };

  function handleCommentChange(event) {
    setComment(event.target.value);
  }

  function handlePaymentChange(event) {
    setPayment(event.target.value);
  }

  function handleShippingChange(event) {
    setShipping(event.target.value);
  }

  return (
    <div>
      <input type="text" value={name} onChange={handleNameChange} />
      <input type="text" value={name} onChange={handleNameChange} />
      <p>Name: {name}</p>
      <button onClick={updateName}>Set Name</button>
      <p>Age: {age}</p>
      <button onClick={incrementAge}>Increment age</button>
      <textarea value={comment} onChange={handleCommentChange}></textarea>
      <p>{comment}</p>
      <select value={payment} onChange={handlePaymentChange}>
        <option value="">Select an option</option>
        <option value="Visa">Visa</option>
        <option value="Mastercard">Mastercard</option>
        <option value="Giftcard">Giftcard</option>
      </select>
      <p>Payment: {payment}</p>
      <label>
        <input
          type="radio"
          value="Pick Up"
          checked={shipping === "Pick Up"}
          onChange={handleShippingChange}
        />
        Pick up
      </label>
      <input
        type="radio"
        value="Delivery"
        checked={shipping === "Delivery"}
        onChange={handleShippingChange}
      />
      <label>Delivery</label>
      <p>Shipping: {shipping}</p>
    </div>
  );
}

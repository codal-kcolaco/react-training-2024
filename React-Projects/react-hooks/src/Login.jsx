import React from "react";
import { useContext } from "react";
import { AppContext } from "./App";

export const Login = () => {
  const { setUsername } = useContext(AppContext);
  return (
    <div>
      <input
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      />
    </div>
  );
};

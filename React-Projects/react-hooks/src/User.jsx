import React from "react";
import { useContext } from "react";
import { AppContext } from "./App";

export const User = () => {
  const { username } = useContext(AppContext);
  return <div>{username}</div>;
};

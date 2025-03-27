import React from "react";
import { useSelector } from "react-redux";
import { selectCount1, selectCount2 } from "../../redux/counterSlice";

import { addition } from "../../js/addition";
import { multiplication } from "../../js/multiplication";

import "./index.scss";

const Footer = ({ text = "Footer goes here" }) => {
  const count1 = useSelector(selectCount1);
  const count2 = useSelector(selectCount2);
  return (
    <footer>
      {text}
      {" - "}
      Count1: {count1}
      {" - "}
      Count2: {count2}
      {" - "}({addition(count1, count2)}){" - "}(
      {multiplication(count1, count2)})
    </footer>
  );
};

export default Footer;

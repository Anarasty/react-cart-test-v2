import React from "react";
import booklist from "../data";
import "../styles/booklist.css";
import Cards from "./Cards";

const Booklist = ({handleClick}) => {
  return (
    <section>
      {booklist.map((item) => (
        <Cards item={item} key={item.id} handleClick={handleClick}></Cards>
      ))}
    </section>
  );
};

export default Booklist;

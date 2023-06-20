import React from "react";

const List = () => {
  let items = ["Tomatoes", "Pasta", "Coconut"];

  return (
    <div>
      <h4 className="title">List Page</h4>
      {items.map((item, idx) => (
        <div className="food" key={idx}>
          <img className={`food${idx}.png`} src="food0.png" />
          <h4>{item} $40</h4>
        </div>
      ))}
    </div>
  );
};

export default List;

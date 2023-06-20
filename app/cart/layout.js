import React from "react";

const layout = ({ children }) => {
  return (
    <div>
      <div>현대카드 무이자이벤트중</div>
      {children}
    </div>
  );
};

export default layout;

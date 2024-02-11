import React from "react";
import Category from "./Category";
import Search from "./Search";

function Menu() {
  return (
    <div className="menu">
      <div className="search">
        <Search />
      </div>
      <div className="category">
        <Category />
      </div>
    </div>
  );
}

export default Menu;

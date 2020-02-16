import React from "react";
import { Link } from "react-router-dom";

const Navigation = ({ categories }) => {
  return (
    <div className="nav-scroller py-1 mb-2">
      <nav className="nav d-flex justify-content-between">
        {categories.map(category => (
          <Link key={category} className="p-2 text-muted" to={"/category/" + category}>
            {category}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Navigation;

import React from "react";

const Navigation = ({ categories = []}) => {
  return (
    <div className="nav-scroller py-1 mb-2">
      <nav className="nav d-flex justify-content-between">
        {categories.map(category => (
          <a key={category} className="p-2 text-muted" href={`/category/${category}`}>
            {category}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default Navigation;

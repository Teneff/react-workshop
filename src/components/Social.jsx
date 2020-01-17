import React from "react";

const Social = ({ links = [] }) => {
  return Boolean(links.length) && (
    <div className="p-4">
      <h4 className="font-italic">Elsewhere</h4>
      <ol className="list-unstyled">
        {links.map(({ link, name }) => (
          <li key={name}>
            <a href={link}>{name}</a>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Social;

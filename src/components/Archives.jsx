import React from "react";
import * as moment from "moment";

const sortDescByFirstElement = ([yA], [yB]) => yB - yA;

const Archives = ({ posts }) => {
  const dates = Object.entries(
    posts.reduce((acc, { date }) => {
      const [year, ...month] = moment(date)
        .format("YYYY-MM-MMMM")
        .split("-");
      const { [year]: months = [] } = acc;
      return {
        ...acc,
        [year]: months.find(([num]) => num === month[0])
          ? months
          : [...months, month]
      };
    }, {})
  )
    .sort(sortDescByFirstElement)
    .map(([y, m]) => [y, m.sort(sortDescByFirstElement)]);
  return (
    <div className="p-4">
      <h4 className="font-italic">Archives</h4>
      <ol className="list-unstyled mb-0">
        {dates.map(([year, months]) => {
          return months.map(([mNum, mName]) => (
            <li key={`${mName} ${year}`}>
              <a href={`/date/${year}-${mNum}`}>{`${mName} ${year}`}</a>
            </li>
          ));
        })}
      </ol>
    </div>
  );
};

export default Archives;

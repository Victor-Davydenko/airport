import React from 'react';

import './table.scss';

const Table = () => {
  return (
    <div className="table-wrapper">
      <table className="table">
        <thead>
          <tr>
            <th>Термінал</th>
            <th>Розклад</th>
            <th>Призначення</th>
            <th>Статус</th>
            <th>Авіакомпанія</th>
            <th>Рейс</th>
          </tr>
        </thead>
      </table>
    </div>
  )
};
export default Table

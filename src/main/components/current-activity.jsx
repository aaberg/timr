import React from 'react';

const CurrentActivity = ({name, category, startTime, duration}) => {
  return (
    <div>
      <h3>Current activity</h3>
      <table className="u-full-width">
        <thead>
        <tr>
          <th>Name</th>
          <th>Category</th>
          <th>Start time</th>
          <th>Duration</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>{name}</td>
          <td>{category}</td>
          <td>{startTime}</td>
          <td>{duration}</td>
        </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CurrentActivity;

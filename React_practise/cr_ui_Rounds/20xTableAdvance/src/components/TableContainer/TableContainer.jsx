import React from "react";
// import Data from "../../Data";

const TableContainer = ({ data }) => {
  return (
    <>
      <main>
        <table className="table-container">
          <thead>
            <tr>
              <th>Date</th>
              <th>Views</th>
              <th>Article</th>
            </tr>
          </thead>

          <tbody>
            {/* Milestone 1: -- loop the data and fill the table body */}
            {/* step1 -- map on data set and create a row */}
            {data.map((curr, i) => (
              <tr key={i}>
                <td> {curr?.date}</td>
                <td> {curr?.views}</td>
                <td> {curr?.article}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </>
  );
};

export default TableContainer;

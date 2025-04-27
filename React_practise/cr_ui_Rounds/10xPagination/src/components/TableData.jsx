import React from "react";

const TableData = ({ data }) => {
  console.log(data);
  return (
    <>
      <table>
        <thead>
          <tr>
            <th className="col-id">ID</th>
            <th className="col-name">Name</th>
            <th className="col-email">Email</th>
            <th className="col-role">Role</th>
          </tr>
        </thead>
        <tbody>
          {/* Yahan data rows map karoge */}

          {/* shayad yaha pe map krke data ko 10 tr banaunga ya 
              aur phir uske andar bhi sara curr.id aisa krke sab chizo ko bhrunga
            */}

          {data.map((curr) => (
            <tr key={curr.id}>
              <td className="col-id">{curr.id}</td>
              <td className="col-name">{curr.name}</td>
              <td className="col-email">{curr.email}</td>
              <td className="col-role">{curr.role}</td>
            </tr>
          ))}

          {/* <tr>
            <td className="col-id">ID</td>
            <td className="col-name">Name</td>
            <td className="col-email">Email</td>
            <td className="col-role">Role</td>
          </tr>
          <tr>
            <td className="col-id">ID</td>
            <td className="col-name">Name</td>
            <td className="col-email">Email</td>
            <td className="col-role">Role</td>
          </tr>
          <tr>
            <td className="col-id">ID</td>
            <td className="col-name">Name</td>
            <td className="col-email">Email</td>
            <td className="col-role">Role</td>
          </tr>
          <tr>
            <td className="col-id">ID</td>
            <td className="col-name">Name</td>
            <td className="col-email">Email</td>
            <td className="col-role">Role</td>
          </tr>
          <tr>
            <td className="col-id">ID</td>
            <td className="col-name">Name</td>
            <td className="col-email">Email</td>
            <td className="col-role">Role</td>
          </tr>
          <tr>
            <td className="col-id">ID</td>
            <td className="col-name">Name</td>
            <td className="col-email">Email</td>
            <td className="col-role">Role</td>
          </tr>
          <tr>
            <td className="col-id">ID</td>
            <td className="col-name">Name</td>
            <td className="col-email">Email</td>
            <td className="col-role">Role</td>
          </tr>
          <tr>
            <td className="col-id">ID</td>
            <td className="col-name">Name</td>
            <td className="col-email">Email</td>
            <td className="col-role">Role</td>
          </tr>
          <tr>
            <td className="col-id">ID</td>
            <td className="col-name">Name</td>
            <td className="col-email">Email</td>
            <td className="col-role">Role</td>
          </tr>
          <tr>
            <td className="col-id">ID</td>
            <td className="col-name">Name</td>
            <td className="col-email">Email</td>
            <td className="col-role">Role</td>
          </tr> */}
        </tbody>
      </table>
    </>
  );
};

export default TableData;

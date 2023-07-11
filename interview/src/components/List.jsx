import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export const List = () => {
  const [data, setData] = useState(JSON.parse(localStorage.getItem("csvData")));

  console.log("@@@", data.data[1]);

  return (
    <div>
      <h1>List</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Gender</th>
            <th>Address</th>
          </tr>
        </thead>

        {data?.data?.map((ele) => {
          return (
            <tbody style={{ paddingRight: "5px" }}>
              {/* Map here the content of CSV */}

              <tr key={ele.id} style={{ paddingRight: "5px" }}>
                <td style={{ padding: "5px" }}>{ele}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
      <Link to="/upload">
        <button>Return </button>
      </Link>
    </div>
  );
};

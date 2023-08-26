/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { UserModelGetRequest } from "../Models/UserModel";
import { getUsers } from "../React-Query/userApiCalls";
import AddUser from "./AddUser/AddUser";
import "./Home.scss";

const Home = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const { data, isSuccess } = useQuery({
    queryKey: ["test", currentPage],
    queryFn: () => getUsers(currentPage),
  });

  return (
    <>
      <button onClick={() => setOpen(true)}>Open Modal</button>

      <AddUser isOpen={open} onClose={() => setOpen(false)} />

      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>PP</th>
            </tr>
          </thead>
          <tbody>
            {isSuccess &&
              data.results.map((user: UserModelGetRequest, index) => (
                <tr key={index}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                </tr>
              ))}
          </tbody>
        </table>

        {/* Pagination controls */}
        <div>
          {isSuccess &&
            Array.from({ length: Math.ceil(data.totalResults / 10) }).map(
              (_, index) => (
                <button
                  key={index}
                  onClick={() => handlePageChange(index + 1)}
                  className={`pagination ${
                    index + 1 === currentPage ? "active" : ""
                  }`}
                >
                  {index + 1}
                </button>
              )
            )}
        </div>
      </div>
    </>
  );
};

export default Home;

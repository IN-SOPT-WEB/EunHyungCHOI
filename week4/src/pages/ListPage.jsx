import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function ListPage() {
  return (
    <div>
      <Link to={`/post/${1}`}>
        <h2>post1</h2>
        <p>post1입니다</p>
      </Link>
      <Outlet />
    </div>
  );
}

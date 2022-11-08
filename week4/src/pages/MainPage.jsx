import React from "react";
import { Link } from "react-router-dom";

export default function MainPage() {
  return (
    <div>
      <Link to="/post">포스트들 보러가기</Link>
    </div>
  );
}

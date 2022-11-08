import React, { useState } from "react";
import Result from "../components/Result";
import SearchBar from "../components/SearchBar";

export default function SearchPage() {
  const [userId, setUserId] = useState("");

  return (
    <div>
      <SearchBar />
      <Result />
    </div>
  );
}

import React, { useState } from "react";
import { loginAPI } from "../api/api";

export default function LoginPage() {
  const [id, setId] = useState("");
  const [pwd, setPwd] = useState("");

  console.log(loginAPI("ilmerry", "0123"));
  return <div>Login</div>;
}

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginAPI, userAPI } from "../api/api";

export default function LoginPage() {
  const [id, setId] = useState("");
  const [pwd, setPwd] = useState("");
  const navigate = useNavigate();

  const handleClickLogin = async () => {
    const post = await loginAPI(id, pwd);
    const get = await userAPI();

    navigate("/search");
  };

  return (
    <div>
      <form>
        <input
          value={id}
          onChange={(e) => setId(e.target.value)}
          type="text"
          placeholder="아이디"
        />
        <input
          value={pwd}
          onChange={(e) => setPwd(e.target.value)}
          type="password"
          placeholder="비밀번호"
        />
        <input onClick={handleClickLogin} type="button" value="로그인" />
      </form>
    </div>
  );
}

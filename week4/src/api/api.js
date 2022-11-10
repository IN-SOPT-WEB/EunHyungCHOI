import axios from "axios";

export const loginAPI = async (id, password) => {
  try {
    const res = await axios.post("/login", {
      id,
      password,
    });
    localStorage.setItem("id", res.data.id);
    localStorage.setItem("password", res.data.password);
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

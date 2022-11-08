// ./lib/router.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Post from "./components/Post";
import ListPage from "./pages/ListPage";
import MainPage from "./pages/MainPage";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/post" element={<ListPage />}>
          <Route path=":postId" element={<Post />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;

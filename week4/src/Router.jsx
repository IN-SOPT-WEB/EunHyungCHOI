// ./lib/router.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Result from "./components/Result";
import SearchPage from "./pages/SearchPage";
import MainPage from "./pages/MainPage";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/search" element={<SearchPage />}>
          <Route path=":userId" element={<Result />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;

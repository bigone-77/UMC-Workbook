import { Outlet, Route, Routes } from "react-router-dom";
import Navbar from "./components/MainNavbar";
import HomePage from "./pages/HomePage/page";
import MoviePage from "./pages/MoviePage/page";
import TVPage from "./pages/TVPage/page";
import CelebPage from "./pages/CelebPage/page";
// import styled from "styled-components";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  )
}


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<HomePage />} />
          <Route path="movie" element={<MoviePage />} />
          <Route path="tv" element={<TVPage />} />
          <Route path="celeb" element={<CelebPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

// const BackGround = styled.div`
//   background-color: #303F9F;
//   height: max-content;
// `
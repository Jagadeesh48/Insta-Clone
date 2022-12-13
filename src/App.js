import logo from "./logo.svg";
import "./App.css";
import Postview from "./PostView/postview";
import LandingPage from "./LandingPage/landing_page";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NewPost from "./PostView/newPost";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/postview" element={<Postview />} />
          <Route path="/newpost" element={<NewPost />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

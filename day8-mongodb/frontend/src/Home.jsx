import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import NewUser from "./NewUser";
function Home() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}></Route>
          <Route path="/newUser" element={<NewUser />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Home;
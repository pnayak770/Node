import { Outlet } from "react-router-dom";
import Footer from "./Components/footer";
import Header from "./Components/header";

function Home() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Home;
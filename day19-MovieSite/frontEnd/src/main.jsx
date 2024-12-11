import { createRoot } from "react-dom/client";
import App from "./App.jsx";
// import AddBook from "./AddBook";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home.jsx";
import Book from "./pages/Book.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import VerifyEmail from "./pages/VerifyEmail.jsx";
import AddBook from "./AddBook.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path: "/book/:id",
        element: <Book />,
      },
      {
        path: "/add",
        element: <AddBook />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/verify-email",
        element: <VerifyEmail />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}></RouterProvider>
);
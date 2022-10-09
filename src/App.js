import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Grandpa from "./componenrs/Grandpa/Grandpa";
import Home from "./componenrs/Home";
import Orders from "./componenrs/Orders";
import Main from "./layout/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <Home />, loader: () => fetch("tshirt.json") },
      { path: "/orders", element: <Orders /> },
      { path: "/grandpa", element: <Grandpa /> },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

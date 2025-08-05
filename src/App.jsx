import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import Products from "./components/products/products";
import NotFound from "./components/NotFound/NotFound";
import Gallery from "./components/Gallery/Gallery";

export default function App() {
  const routes = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "about", element: <About /> },
        { path: "potfolio", element: <Portfolio /> },
        { path: "contact", element: <Contact /> },
        { path: "*", element: <NotFound /> }, // Ensure NotFound is imported
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
}

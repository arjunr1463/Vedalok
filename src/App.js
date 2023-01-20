import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Home from "./Pages/Home/Home";
import Ideology from "./Pages/Ideology/Ideology";
import News from "./Pages/News/News";
import PortFolio from "./Pages/PortFolio/PortFolio";
import Video from "./Pages/PortFolio/Video";

function App() {
  const Layout1 = () => {
    return (
      <div className="">
        <NavBar />
        <Outlet />
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout1 />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/About",
          element: <About />,
        },
        {
          path: "/Ideology",
          element: <Ideology />,
        },
        {
          path: "/Contact",
          element: <Contact />,
        },
        {
          path: "/News",
          element: <News />,
        },
        {
          path: "/PortFolio",
          element: <PortFolio />,
        },
        {
          path: "/Video",
          element: <Video />,
        },
      ],
    },
    
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

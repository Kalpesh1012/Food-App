import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Aboutus from "./components/Aboutus";
import ErrorHandling from "./components/ErrorHandling";
import Contact from "./components/Contact";
import RestaurantDetails from "./components/RestaurantDetails";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Profile from "./components/Profile";
import Cart from "./components/Cart";
import Shimmer from "./components/Shimmer";
import { Provider } from "react-redux";
import store from "./utils/store";

const Offerss = lazy(() => import("./Offer"));
const AppLayout = () => {
  return (
    <React.Fragment>
      <Provider store={store}>
        <Header />
        <Outlet />
        <Footer />
      </Provider>
    </React.Fragment>
  );
};

const approuter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorHandling />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <Aboutus />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restuarant/:uniqueid",
        element: <RestaurantDetails />,
      },
      {
        path: "/offer",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Offerss />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={approuter} />);

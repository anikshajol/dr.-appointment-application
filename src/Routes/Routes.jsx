import { createBrowserRouter } from "react-router";

import Root from "../Layouts/Root";
import Home from "../Components/Home";
import MyBookings from "../Pages/MyBookings";
import ErrorPage from "../Pages/ErrorPage";
import { Suspense } from "react";

import Loader from "../Components/Loader";
import DoctorsDetails from "../Components/DoctorsDetails";

const fetchDoctorsData = async () => {
  const res = await fetch("/data.json");
  return res.json();
};
const doctorsDataPromise = fetchDoctorsData();

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<Loader />}>
            <Home doctorsDataPromise={doctorsDataPromise} />
          </Suspense>
        ),
      },
      {
        path: `doctors/:id`,
        Component: DoctorsDetails,
        loader: () => fetch(`/data.json`),
      },

      { path: "bookings", Component: MyBookings },
    ],
  },
]);

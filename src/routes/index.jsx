import App from "../App";
import ErrorPage from "../components/not-route-finded";
import DetailProducts from "../components/products/detail-product";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
    },
    {
      path: "product/:productId",
      element: <DetailProducts />,
    },
  ]);

  export default router;
import App from "../App";
import SignIn from "../components/auth/signin";
import HomeCRUD from "../components/crud/home-crud";
import Home from "../components/home";
import ErrorPage from "../components/not-route-finded";
import DetailProducts from "../components/products/detail-product";
import { createBrowserRouter } from "react-router-dom";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/signIn",
      element: <SignIn />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/products",
      element: <App />,
      errorElement: <ErrorPage />,
    },
    {
      path: "products/:productId",
      element: <DetailProducts />,
    },
    {
      path: "/crudProducts",
      element: <HomeCRUD />,
    },
  ]);

  export default router;
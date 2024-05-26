import { Suspense } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Loader from "./components/loader.tsx";
import { lazy } from "react";
// const Dashboard = lazy(() => import("./pages/Admin/Dashboard.tsx"));
// const Products = lazy(() => import("./pages/Admin/Products.tsx"));
// const Customer = lazy(() => import("./pages/Admin/Customer.tsx"));
// const Transaction = lazy(() => import("./pages/Admin/Transaction.tsx"));
// const NewProduct = lazy(
//   () => import("./pages/Admin/managment/NewProducts.tsx")
// );
// const TransactionManagement = lazy(
//   () => import("./pages/Admin/managment/TransactionManagement.tsx")
// );
// const ProductManagment = lazy(
//   () => import("./pages/Admin/managment/ProductManagment.tsx")
// );
// const TopSellingChart = lazy(
//   () => import("./pages/Admin/Analytics/TopSellingChart.tsx")
// );
// const ProductAnalytics = lazy(
//   () => import("./pages/Admin/Analytics/ProductAnalytics.tsx")
// );
// const LineGraph = lazy(() => import("./pages/Admin/Analytics/LineGraph.tsx"));
// const Coupon = lazy(() => import("./pages/Admin/Coupon.tsx"));
// const Home = lazy(() => import("./pages/users/home.tsx"));
// const Search = lazy(() => import("./pages/users/search.tsx"));
// const Cart = lazy(() => import("./pages/users/cart.tsx"));
// const ContactUs = lazy(() => import("./pages/users/contactUs.tsx));
//const MyOrder = lazy(() => import( "./pages/users/myOrder.tsx"));;
//const MyProfile = lazy(() => import( "./pages/users/myProfile.tsx"));;
//const MyCoupons = lazy(() => import( "./pages/users/myCoupons.tsx"));
// const Shipping = lazy(() => import( "./pages/users/Shipping.tsx"));
// const Login = lazy(() => import( "./pages/users/Login.tsx"));
import LineGraph from "./pages/Admin/Analytics/LineGraph.tsx";
import ProductAnalytics from "./pages/Admin/Analytics/ProductAnalytics.tsx";
import TopSellingChart from "./pages/Admin/Analytics/TopSellingChart.tsx";
import Coupon from "./pages/Admin/Coupon.tsx";
import Customer from "./pages/Admin/Customer.tsx";
import Dashboard from "./pages/Admin/Dashboard.tsx";
import Products from "./pages/Admin/Products.tsx";
import Transaction from "./pages/Admin/Transaction.tsx";
import NewProduct from "./pages/Admin/managment/NewProducts.tsx";
import ProductManagment from "./pages/Admin/managment/ProductManagment.tsx";
import TransactionManagement from "./pages/Admin/managment/TransactionManagement.tsx";
import Home from "./pages/home.tsx";
import Cart from "./pages/users/Cart.tsx";
import ContactUs from "./pages/users/contactUs.tsx";
import MyCoupons from "./pages/users/myCoupons.tsx";
import MyOrder from "./pages/users/MyOrder.tsx";
import MyProfile from "./pages/users/myProfile.tsx";
import Search from "./pages/users/Search.tsx";
import Shipping from "./pages/users/Shipping.tsx";
import LoginSignUp from "./pages/users/SigninSignup.tsx";
const App = () => {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          {/* User Routes*/}
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/login" element={<LoginSignUp />} />

          {/*Login Required */}
          <Route>
            <Route path="/myOrders" element={<MyOrder />} />
            <Route path="/myProfile" element={<MyProfile />} />
            <Route path="/myCoupons" element={<MyCoupons />} />
            <Route path="/shipping" element={<Shipping />} />
          </Route>

          {/*Admin */}
          <Route>
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/products" element={<Products />} />
            <Route path="/admin/customer" element={<Customer />} />
            <Route path="/admin/transaction" element={<Transaction />} />
            {/*Analytics*/}
            <Route
              path="/admin/analytics/topSelling"
              element={<TopSellingChart />}
            />
            <Route
              path="/admin/analytics/Products"
              element={<ProductAnalytics />}
            />
            <Route path="/admin/analytics/linegraph" element={<LineGraph />} />
            {/*App*/}
            <Route path="/admin/coupon" element={<Coupon />} />

            {/* Managment */}
            <Route path="/admin/product/new" element={<NewProduct />} />
            <Route path="/admin/product/:id" element={<ProductManagment />} />
            <Route
              path="/admin/transaction/:id"
              element={<TransactionManagement />}
            />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;

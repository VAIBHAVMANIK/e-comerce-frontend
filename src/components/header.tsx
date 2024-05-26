import { useEffect, useState, FormEvent } from "react";
import { BiCartAdd, BiLogIn } from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { RiCoupon2Line, RiCustomerService2Line } from "react-icons/ri";
import { TbShoppingCartSearch } from "react-icons/tb";
import { VscSignOut } from "react-icons/vsc";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.jpg";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true);
  const user = {
    _id: "123456",
    name: "Kathryn Norton",
    role: "admin",
    setIsLoggedIn: true,
  };
  const [search, setSearch] = useState<string>("");
  const navigate = useNavigate();

  const searchHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("from search");
    navigate("/search");
  };

  return (
    <div className="header">
      <div className="logo">
        <Link to={"/"}>
          <img src={logo} alt="avatar" />
        </Link>
      </div>
      <div className="search-bar">
        <form onSubmit={searchHandler}>
          <button>
            <IoIosSearch />
          </button>
          <input
            type="search"
            name=""
            id=""
            placeholder="Search for Products, Brands and More"
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
      </div>
      <div className="navigation">
        {user._id && isLoggedIn == true ? (
          <div className="user-opt">
            <div className="user-btn">
              <FaUserCircle />
              {user.name}
            </div>
            <ul className="options">
              {user.role == "admin" && (
                <li>
                  <Link to={"/admin/dashboard"} className="nav-btn">
                    <MdOutlineSpaceDashboard /> My DashBoard
                  </Link>
                </li>
              )}
              <li>
                <Link className="nav-btn" to={"/myProfile"}>
                  <FaUserCircle />
                  My Profile
                </Link>
              </li>
              <li>
                <Link className="nav-btn" to={"/myOrders"}>
                  <TbShoppingCartSearch />
                  My Orders
                </Link>
              </li>
              <li>
                <Link className="nav-btn" to={"/myCoupons"}>
                  <RiCoupon2Line />
                  Coupons
                </Link>
              </li>
              <li>
                <button
                  className="signOut nav-btn "
                  onClick={() => {
                    setIsLoggedIn(false);
                    user._id = "";
                  }}
                >
                  <VscSignOut />
                  Sign Out
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <Link to={"/login"} className="nav-btn">
            <BiLogIn /> Login/SignUp
          </Link>
        )}
        <Link className="nav-btn" to={"/cart"}>
          <BiCartAdd />
          Cart
        </Link>

        <Link className="nav-btn" to={"/contactUs"}>
          <RiCustomerService2Line />
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default Header;

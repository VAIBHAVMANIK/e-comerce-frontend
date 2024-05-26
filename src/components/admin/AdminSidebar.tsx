import { useEffect, useState } from "react";
import { BiSolidCartAdd, BiSolidCoupon } from "react-icons/bi";
import { CgDarkMode } from "react-icons/cg";
import { FaChartPie, FaListUl, FaMoneyCheckAlt } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { IoBarChart } from "react-icons/io5";
import { MdDashboardCustomize } from "react-icons/md";
import { VscGraphLine } from "react-icons/vsc";
import { Link } from "react-router-dom";
import UserPic from "../../assets/Profile1.jpg";
import logo from "../../assets/logo.jpg";
const AdminSidebar = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [phoneactive, setPhoneActive] = useState<boolean>(
    window.innerWidth < 1100
  );
  const resizeHandler = () => {
    setPhoneActive(window.innerWidth < 1100);
  };
  const [showOption, setShowOption] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return (
    <>
      {phoneactive && (
        <button id="option-popup" onClick={() => setShowModal(true)}>
          <FaListUl />
        </button>
      )}
      <aside
        style={
          phoneactive
            ? {
                width: "20rem",
                height: "100vh",
                position: "fixed",
                top: "0",
                left: showModal ? "0" : "-20rem",
                transition: "all 0.5s",
              }
            : {}
        }
      >
        <div className="logo">
          <Link to={"/"}>
            <img src={logo} alt="avatar" />
          </Link>
        </div>
        <div className="Profile">
          <img src={UserPic} alt="User" />
          <h3>Welcome Name</h3>
        </div>
        <div>
          <h5>DashBoard</h5>
          <ul>
            <li>
              <Link
                to={"/admin/dashboard"}
                style={{
                  backgroundColor: location.pathname.includes(
                    "/admin/dashboard"
                  )
                    ? "rgb(248, 211, 164)"
                    : "antiquewhite",
                }}
              >
                <MdDashboardCustomize />
                <label>DashBoard</label>
              </Link>
            </li>
            <li>
              <Link
                to={"/admin/products"}
                style={{
                  backgroundColor: location.pathname.includes("/admin/products")
                    ? "rgb(248, 211, 164)"
                    : "antiquewhite",
                }}
              >
                <BiSolidCartAdd />
                <label>Products</label>
              </Link>
            </li>
            <li>
              <Link
                to={"/admin/customer"}
                style={{
                  backgroundColor: location.pathname.includes("/admin/customer")
                    ? "rgb(248, 211, 164)"
                    : "antiquewhite",
                }}
              >
                <FaPeopleGroup />
                <label>Customer</label>
              </Link>
            </li>
            <li>
              <Link
                to={"/admin/transaction"}
                style={{
                  backgroundColor: location.pathname.includes(
                    "/admin/transaction"
                  )
                    ? "rgb(248, 211, 164)"
                    : "antiquewhite",
                }}
              >
                <FaMoneyCheckAlt />
                <label>Transaction</label>
              </Link>
            </li>
            {phoneactive && (
              <li className="theme-box">
                <button
                  className="theme-btn"
                  onClick={() => setShowOption((prev) => !prev)}
                >
                  <CgDarkMode />
                  Theme
                </button>
                {showOption && (
                  <div
                    className="theme-option"
                    style={{ marginBottom: "2rem" }}
                  >
                    <div>
                      <button>Dark</button>
                    </div>
                    <div>
                      <button>Light</button>
                    </div>
                  </div>
                )}
              </li>
            )}
          </ul>
        </div>
        <div>
          <h5>Statistics</h5>
          <ul>
            <li>
              <Link
                to={"/admin/analytics/topSelling"}
                style={{
                  backgroundColor: location.pathname.includes(
                    "/admin/analytics/topSelling"
                  )
                    ? "rgb(248, 211, 164)"
                    : "antiquewhite",
                }}
              >
                <IoBarChart />
                <label>Top Selling</label>
              </Link>
            </li>
            <li>
              <Link
                to={"/admin/analytics/Products"}
                style={{
                  backgroundColor: location.pathname.includes(
                    "/admin/analytics/Products"
                  )
                    ? "rgb(248, 211, 164)"
                    : "antiquewhite",
                }}
              >
                <FaChartPie />
                <label>Products</label>
              </Link>
            </li>
            <li>
              <Link
                to={"/admin/analytics/linegraph"}
                style={{
                  backgroundColor: location.pathname.includes(
                    "/admin/analytics/linegraph"
                  )
                    ? "rgb(248, 211, 164)"
                    : "antiquewhite",
                }}
              >
                <VscGraphLine />
                <label>Line</label>
              </Link>
            </li>
            <li>
              <Link
                to={"/admin/coupon"}
                style={{
                  backgroundColor: location.pathname.includes("/admin/coupon")
                    ? "rgb(248, 211, 164)"
                    : "antiquewhite",
                }}
              >
                <BiSolidCoupon />
                <label>Coupon</label>
              </Link>
            </li>
          </ul>
        </div>
        {phoneactive && (
          <button id="close-btn" onClick={() => setShowModal(false)}>
            Close
          </button>
        )}
      </aside>
    </>
  );
};

export default AdminSidebar;

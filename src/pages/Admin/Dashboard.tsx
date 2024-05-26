import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { CiSun } from "react-icons/ci";
import { BiMaleFemale } from "react-icons/bi";
import { FaCubesStacked, FaMoneyBillTransfer } from "react-icons/fa6";
import { FiMoon } from "react-icons/fi";
import { GiMoneyStack } from "react-icons/gi";
import { IoIosSearch, IoMdNotifications } from "react-icons/io";
import AdminSidebar from "../../components/admin/AdminSidebar";
import WidgetCard from "../../components/admin/WidgetCard.tsx";
import InventoryCard from "../../components/admin/InventoryCard.tsx";
import data from "../../assets/data.json";
import { Charts, DoughnutChart } from "../../components/admin/Charts.tsx";
import TopTractionTable from "../../components/admin/TopTractionTable.tsx";
const dashboard = () => {
  return (
    <div className="AdminContainer">
      <AdminSidebar />
      <main>
        <div className="top-bar">
          <div className="search">
            <IoIosSearch />
            <input type="text" placeholder="Search for docs" />
          </div>
          <div className="right-part">
            <div className="darkmode">
              <CiSun />
              <label className="switch">
                <input type="checkbox" />
                <div className="slider round"></div>
              </label>
              <FiMoon />
            </div>
            <div className="bell-icon">
              <IoMdNotifications />
            </div>
          </div>
        </div>
        <section className="widget-container">
          <WidgetCard
            Icon={<GiMoneyStack />}
            title={"Revenue"}
            value={33400000}
            percentage={50}
            color={"yellowgreen"}
            isvalue={true}
          />
          <WidgetCard
            Icon={<AiOutlineUsergroupAdd />}
            title={"User"}
            value={4500000000}
            percentage={10}
            color={"blue"}
            isvalue={false}
          />
          <WidgetCard
            Icon={<FaMoneyBillTransfer />}
            title={"Transaction"}
            value={33400}
            percentage={40}
            color={"violet"}
            isvalue={true}
          />
          <WidgetCard
            Icon={<FaCubesStacked />}
            title={"Products"}
            value={80000}
            percentage={10}
            color={"purple"}
            isvalue={false}
          />
        </section>
        <section className="graph-container">
          <div className="graph">
            <h3>Revenue and Trasaction</h3>
            <div className="chart-container">
              <Charts
                horizontal={false}
                dataSheet1={[450, 230, 800, 750, 900, 200, 100]}
                dataSheet2={[250, 430, 900, 450, 400, 800, 120]}
                title1={"Revenue"}
                title2={"Transaction"}
                bgColor1={"#2450c9"}
                bgColor2={"#c7a64a"}
              />
            </div>
          </div>

          <div className="Inventory">
            <h3>Inventory</h3>
            <div>
              {data.Category.map((i) => (
                <InventoryCard
                  key={i.id}
                  title={i.title}
                  color={`hsl(${i.stock * 5},${i.stock}%,50%)`}
                  stock={i.stock}
                />
              ))}
            </div>
          </div>
        </section>
        <section className="bottom-container">
          <div className="gender-chart">
            <h2>Gender Chart</h2>
            <div className="chart-container">
              <DoughnutChart
                labels={["Female", "Male"]}
                data={[100, 50]}
                backgroundColor={["pink", "#2450c9"]}
                cutout={"80%"}
              />
              <span>
                <BiMaleFemale />
              </span>
            </div>
          </div>
          <TopTractionTable data={data.TopTransactionInfoArray} />
        </section>
      </main>
    </div>
  );
};

export default dashboard;

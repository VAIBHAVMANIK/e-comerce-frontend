import AdminSidebar from "../../../components/admin/AdminSidebar.tsx";
import { Charts } from "../../../components/admin/Charts.tsx";
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];
const TopSellingChart = () => {
  return (
    <div className="AdminContainer">
      <AdminSidebar />
      <main>
        <div className="chart-container">
          <section className="User-Product">
            <h2>User And Product</h2>
            <Charts
              horizontal={false}
              dataSheet1={[444, 215, 102, 333, 567, 100, 97]}
              dataSheet2={[789, 213, 321, 520, 104, 412, 144]}
              title1={"Product"}
              title2={"User"}
              bgColor1={"hsl(260,100%,10%)"}
              bgColor2={"hsl(360,100%,60%)"}
            />
          </section>
          <section className="Top-Selling">
            <h2>Orders ThroughOut Year</h2>
            <Charts
              horizontal={true}
              dataSheet1={[
                444, 215, 102, 333, 567, 100, 97, 800, 450, 90, 60, 30,
              ]}
              dataSheet2={[]}
              title1={"Product"}
              title2={""}
              bgColor1={"hsl(480,100%,50%)"}
              bgColor2={""}
              legends={false}
              labels={months}
            />
          </section>
        </div>
      </main>
    </div>
  );
};

export default TopSellingChart;

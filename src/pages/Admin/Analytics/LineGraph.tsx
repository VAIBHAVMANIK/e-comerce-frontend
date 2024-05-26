import AdminSidebar from "../../../components/admin/AdminSidebar";
import { LineCharts } from "../../../components/admin/Charts";

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

const LineGraph = () => {
  return (
    <div className="AdminContainer">
      <AdminSidebar />
      <main>
        <div className="LineGraph-container">
          <div className="active-users">
            <h2>Active Users</h2>
            <LineCharts
              dataSheet={[20, 65, 87, 96, 12, 45, 74, 10, 22, 48, 65, 78]}
              title={"Active Users"}
              bgColor={"rgba(53,162,225,0.5)"}
              borderColor={"rgb(53,162,225)"}
              labels={months}
              legends={false}
            />
          </div>
          <div className="total-revenue">
            <h2>Total Revenue</h2>
            <LineCharts
              dataSheet={[
                200000, 145665, 78944, 102396, 784412, 41245, 10274, 107894,
                220000, 481023, 65745, 784562,
              ]}
              title={"Total Revenue"}
              bgColor={"rgba(69,100,225,0.5)"}
              borderColor={"rgb(69,80,225)"}
              labels={months}
              legends={false}
            />
          </div>
          <div className="total-discount">
            <h2>Total Discount Allocated</h2>
            <LineCharts
              dataSheet={[
                2000, 1456, 7894, 10239, 84412, 4124, 10274, 17894, 2200, 48123,
                6545, 7845,
              ]}
              title={"Total Discount Allocated"}
              bgColor={"rgba(149,225,20,0.5)"}
              borderColor={"rgb(155,225,30)"}
              labels={months}
              legends={false}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default LineGraph;

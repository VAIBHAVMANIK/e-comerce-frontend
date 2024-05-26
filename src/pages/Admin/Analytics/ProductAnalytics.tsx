import { Category } from "../../../assets/data.json";
import AdminSidebar from "../../../components/admin/AdminSidebar";
import { DoughnutChart, PieChart } from "../../../components/admin/Charts";

const ProductAnalytics = () => {

  return (
    <div className="AdminContainer">
      <AdminSidebar />
      <main>
        <div className="productAnalytics-container">
          <section className="Order-Ratio">
            <h2>Order Fullfilment Ratio</h2>
            <PieChart
              labels={["Processing", "Shipped", "Delivered"]}
              data={[12, 9, 13]}
              backgroundColor={[
                "hsl(110,80%,80%)",
                "hsl(110,80%,50%)",
                "hsl(110,80%,30%)",
              ]}
              offset={[10, 10, 10]}
            />
          </section>
          <section className="Product-Category">
            <h2>Product-Category Ratio</h2>
            <DoughnutChart
              labels={Category.map((i) => i.title)}
              data={Category.map((i) => i.stock)}
              backgroundColor={Category.map(
                (i) => `hsl(${i.stock * 5},${i.stock}%,50%)`
              )}
              offset={Category.map((i) => 10)}
              cutout={"70%"}
            />
          </section>
          <section className="Stock-avail">
            <h2>Stock Availability</h2>
            <DoughnutChart
              labels={["In Stock", "Out Stock"]}
              data={[20, 80]}
              backgroundColor={["hsl(150,100%,50%)", "hsl(950,100%,80%)"]}
              offset={[0, 80]}
              cutout={"70%"}
            />
          </section>
          <section className="Revenue-Dist">
            <h2>Revenue Distribution</h2>
            <DoughnutChart
              labels={[
                "Marketing Cost",
                "Discount",
                "Burnt",
                "Production Cost",
                "Net Marging",
              ]}
              data={[32, 18, 5, 8, 20]}
              backgroundColor={[
                "hsl(250,100%,50%)",
                "hsl(950,100%,80%)",
                "hsl(450,100%,50%)",
                "hsl(900,50%,80%)",
                "hsl(300,50%,80%)",
              ]}
              offset={[10, 10, 10, 10, 10]}
              cutout={"70%"}
            />
          </section>
        </div>
      </main>
    </div>
  );
};

export default ProductAnalytics;

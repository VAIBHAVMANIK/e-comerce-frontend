
interface InventoryCard {
  title: string;
  color: string;
  stock: number;
}

const InventoryCard = ({ title, color, stock }: InventoryCard) => {
  return (
    <div className="Inventory-Card">
      <h5>{title}</h5>
      <div>
        <div
          style={{
            background: `${color}`,
            width: `${stock}%`,
          }}
        ></div>
      </div>
      <span>{stock}%</span>
    </div>
  );
};

export default InventoryCard;
